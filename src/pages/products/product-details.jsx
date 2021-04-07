import React, { useEffect } from "react";
import { Header, Footer } from "components";
import * as S from "./styles";
import * as C from "components/common/styles";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT } from "store/slices/productSlice";
import { useParams } from "react-router";
import { ADD_ITEM } from "store/slices/cartSlice";
import { formatCurrency } from "utils/helpers";

const ProductDetails = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector(({ product }) => product);

  useEffect(() => {
    dispatch(GET_PRODUCT(id));
  }, [dispatch, id]);

  const addItem = (item) => dispatch(ADD_ITEM({ item }));

  return (
    <C.Wrapper>
      <Header />
      <C.Section>
        <S.ProductImage src={product?.images[0]} />
        <S.ProductTitle>{product?.displayName}</S.ProductTitle>
        <C.ProductPrice>{formatCurrency(product?.price?.max)}</C.ProductPrice>
        <C.ProductBuyButton
          onClick={() =>
            addItem({
              id: product.id,
              title: product.displayName,
              imageUrl: product.images[0],
              price: product.price.max,
              quantity: 1,
            })
          }
        >
          Adicionar
        </C.ProductBuyButton>
      </C.Section>
      <Footer />
    </C.Wrapper>
  );
};

export default ProductDetails;
