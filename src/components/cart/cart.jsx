import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as BagIcon } from "../../assets/icons/bag.svg";
import * as S from "./styles";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => {
    setIsOpen(true);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.Bag onClick={handleOpenCart} data-testid="bag">
        <BagIcon width={24} height={24} />
        {/* <span data-testid="quantity-items">{cartItems.length}</span> */}
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
            {/* 
            {cartItems && cartItems.length ? (
              <S.CartList data-testid="cart-list">
                {cartItems?.map(({ id, title, price, imageUrl, quantity }) => (
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
                      <span data-testid={`${title}-price`}>{formatCurrency(price)}</span>
                      <button onClick={() => removeItemToCart(id)}>
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
            )} */}

            <S.CartEmpty>
              <span>Ops! Você não tem itens na sua sacola</span>
            </S.CartEmpty>

            <S.CartFooter>
              <S.CartTotals>
                Total:{" "}
                <strong>
                  {/* {formatCurrency(
                    cartItems.reduce((prev, current) => prev + current.price * current.quantity, 0),
                  )} */}
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