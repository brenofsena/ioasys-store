import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "utils/test/helpers";
import { Cart } from "components";
import { Provider } from "react-redux";
import store from "store/store";

const makeSut = () => {
  renderWithTheme(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
};

describe("Cart Component", () => {
  test("Should call close cart", () => {
    makeSut();
    fireEvent.click(screen.getByTestId("bag"));
    const cart = screen.getByTestId("cart");
    fireEvent.click(screen.getByTestId("close-cart"));
    expect(cart).not.toBeInTheDocument();
  });
});
