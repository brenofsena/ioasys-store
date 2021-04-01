import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "utils/helpers";
import * as S from "./styles";

const ProductItem = ({ id, title, images, price }) => {
  return (
    <S.ProductItem key={id}>
      <S.ProductImage
        data-testid="image"
        src={images[0]}
        alt={title}
        title={title}
      />
      <S.ProductInfo>
        <S.ProductTitle data-testid="title">{title}</S.ProductTitle>
        <S.ProductPrice data-testid="price">
          {formatCurrency(price)}
        </S.ProductPrice>
        <S.ProductActions>
          <S.ProductBuyButton>Adicionar</S.ProductBuyButton>
        </S.ProductActions>
      </S.ProductInfo>
    </S.ProductItem>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.instanceOf(Array).isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
