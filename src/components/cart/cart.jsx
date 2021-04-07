import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import { ReactComponent as BagIcon } from "assets/icons/bag.svg";
import { ReactComponent as TrashIcon } from "assets/icons/trash.svg";
import { formatCurrency } from "utils/helpers";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ITEM } from "store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useSelector(({ cart }) => cart);

  const handleOpenCart = () => setIsOpen(true);

  const handleCloseCart = () => setIsOpen(false);

  const removeItem = (id) => dispatch(REMOVE_ITEM({ id }));

  return (
    <>
      <S.Bag onClick={handleOpenCart} data-testid="bag">
        <BagIcon width={24} height={24} />
        <span data-testid="quantity-items">{items?.length}</span>
      </S.Bag>

      {isOpen && (
        <S.Cart data-testid="cart">
          <S.CartFade onClick={handleCloseCart} />
          <S.CartWrapper>
            <S.CartHeader>
              <h3>SACOLA</h3>
              <CloseIcon
                width={24}
                height={24}
                onClick={handleCloseCart}
                data-testid="close-cart"
              />
            </S.CartHeader>

            {items && items.length ? (
              <S.CartList data-testid="cart-list">
                {items.map(({ id, title, price, imageUrl, quantity }) => (
                  <li key={id}>
                    <div>
                      <span data-testid={`${title}-quantity`}>{quantity}x</span>
                      <img
                        data-testid={`${title}-image`}
                        src={imageUrl}
                        alt={title}
                        title={title}
                      />
                      <p data-testid={`${title}-title`}>{title}</p>
                      <span data-testid={`${title}-price`}>
                        {formatCurrency(price)}
                      </span>
                      <button onClick={() => removeItem(id)}>
                        <TrashIcon width={24} height={24} />
                      </button>
                    </div>
                  </li>
                ))}
              </S.CartList>
            ) : (
              <S.CartEmpty>
                <span>Ops! Você não tem itens na sua sacola</span>
              </S.CartEmpty>
            )}

            <S.CartFooter>
              <S.CartTotals>
                Total:{" "}
                <strong>
                  {formatCurrency(
                    items?.reduce(
                      (prev, current) =>
                        prev + current.price * current.quantity,
                      0
                    )
                  )}
                </strong>
              </S.CartTotals>
            </S.CartFooter>
          </S.CartWrapper>
        </S.Cart>
      )}
    </>
  );
};

export default Cart;
