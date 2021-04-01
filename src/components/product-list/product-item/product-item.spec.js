import React from "react";
import { screen } from "@testing-library/react";
import ProductItem from "./product-item";
import { renderWithTheme } from "../../../utils/test/helpers";
import faker from "faker";

const mockProduct = () => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  images: [faker.internet.url()],
  price: Number(faker.commerce.price()),
});

const makeSut = (product = mockProduct()) => {
  renderWithTheme(
    <ProductItem
      id={product.id}
      title={product.title}
      images={product.images}
      price={product.price}
    />
  );
};

describe("ProductItem Component", () => {
  test("Should render with correct values", () => {
    const product = mockProduct();
    makeSut(product);
    expect(screen.getByTestId("image")).toHaveAttribute(
      "src",
      product.images[0]
    );
    expect(screen.getByTestId("title")).toHaveTextContent(product.title);
    expect(screen.getByTestId("price")).toHaveTextContent(product.price);
  });
});
