import React, { useEffect } from "react";
import { Header, Footer, Spinner, ProductList } from "components";
import * as C from "components/common/styles";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS } from "store/slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(({ product }) => product);

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, [dispatch]);

  return (
    <C.Wrapper>
      <Header />
      <C.Section>
        {isLoading ? (
          <Spinner />
        ) : (
          products.map(({ displayName, items }, index) => (
            <ProductList
              key={index}
              categoryTitle={displayName}
              products={items}
            />
          ))
        )}
      </C.Section>
      <Footer />
    </C.Wrapper>
  );
};

export default Products;
