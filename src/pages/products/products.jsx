import React, { useEffect, useState } from "react";
import { Header, Footer, Cart, Spinner, ProductList } from "components";
import * as S from "./styles";
import api from "services/api";

const Products = () => {
  const [shelfs, setShelfs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get("/products");
      setShelfs(data);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <S.ProductsWrapper>
      <Header />
      <S.Section>
        {isLoading ? (
          <Spinner />
        ) : (
          shelfs.map(({ categoryTitle, products }, index) => (
            <ProductList
              key={index}
              categoryTitle={categoryTitle}
              products={products}
            />
          ))
        )}
      </S.Section>
      <Cart />
      <Footer />
    </S.ProductsWrapper>
  );
};

export default Products;
