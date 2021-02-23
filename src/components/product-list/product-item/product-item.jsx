import React from "react";
import PropTypes from "prop-types";
import { formatCurrency } from "../../../utils/helpers";
import * as S from "./styles";

const ProductItem = ({ id, title, images, productVariants }) => {
  return (
    <S.ProductItem key={id}>
      <S.ProductImage
        data-testid="image"
        src={images[0].url}
        alt={title}
        title={title}
      />
      <S.ProductInfo>
        <S.ProductTitle data-testid="title">{title}</S.ProductTitle>
        <S.ProductPrice data-testid="price">
          {formatCurrency(productVariants[0].price)}
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
  productVariants: PropTypes.instanceOf(Array).isRequired,
};

export default ProductItem;
