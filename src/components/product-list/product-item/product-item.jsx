import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatCurrency } from "utils/helpers";
import * as S from "./styles";
import * as C from "components/common/styles";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "store/slices/cartSlice";

const ProductItem = ({ id, title, imageUrl, price }) => {
  const dispatch = useDispatch();

  const addItem = (item) => dispatch(ADD_ITEM({ item }));

  return (
    <S.ProductItem key={id}>
      <Link to={`/produtos/${id}`}>
        <S.ProductImage
          data-testid="image"
          src={imageUrl}
          alt={title}
          title={title}
        />
      </Link>
      <S.ProductInfo>
        <S.ProductTitle data-testid="title">{title}</S.ProductTitle>
        <S.ProductPrice data-testid="price">
          {formatCurrency(price)}
        </S.ProductPrice>
        <S.ProductActions>
          <C.ProductBuyButton
            onClick={() => addItem({ id, title, imageUrl, price, quantity: 1 })}
          >
            Adicionar
          </C.ProductBuyButton>
        </S.ProductActions>
      </S.ProductInfo>
    </S.ProductItem>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
