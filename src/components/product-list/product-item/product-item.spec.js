import React from "react";
import { screen } from "@testing-library/react";
import ProductItem from "./product-item";
import { renderWithTheme } from "utils/test/helpers";
import faker from "faker";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import store from "store/store";
import { Router } from "react-router-dom";

const mockProduct = () => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  imageUrl: faker.internet.url(),
  price: Number(faker.commerce.price()),
});

const makeSut = (product = mockProduct()) => {
  const history = createMemoryHistory({
    initialEntries: ["/"],
  });
  renderWithTheme(
    <Provider store={store}>
      <Router history={history}>
        <ProductItem
          id={product.id}
          title={product.title}
          imageUrl={product.imageUrl}
          price={product.price}
        />
      </Router>
    </Provider>
  );
};

describe("ProductItem Component", () => {
  test("Should render with correct values", () => {
    const product = mockProduct();
    makeSut(product);
    expect(screen.getByTestId("image")).toHaveAttribute(
      "src",
      product.imageUrl
    );
    expect(screen.getByTestId("title")).toHaveTextContent(product.title);
    expect(screen.getByTestId("price")).toHaveTextContent(product.price);
  });
});
