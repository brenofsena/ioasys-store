import React, { useEffect, useState } from "react";
import { Header, Footer, Spinner, ProductList } from "components";
import * as S from "./styles";
import api from "services/api";

const Products = () => {
  const [shelves, setShelves] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getShelves = async () => {
    setIsLoading(true);

    try {
      const { data } = await api.get("/shelves");
      setShelves(data);
    } catch (error) {
      console.error(`Erro: ${error.message}`);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getShelves();
  }, []);

  return (
    <S.ProductsWrapper>
      <Header />
      <S.Section>
        {isLoading ? (
          <Spinner />
        ) : (
          shelves.map(({ displayName, items }, index) => (
            <ProductList
              key={index}
              categoryTitle={displayName}
              products={items}
            />
          ))
        )}
      </S.Section>
      <Footer />
    </S.ProductsWrapper>
  );
};

export default Products;
