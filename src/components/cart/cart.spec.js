import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { CartContext } from '../../contexts';
import { renderWithTheme } from '../../utils/test/helpers';
import { formatCurrency } from '../../utils/helpers';
import Cart from './cart';
import faker from 'faker';

const mockCartItems = () => [
  {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    imageUrl: faker.internet.url(),
    quantity: 1,
  },
  {
    id: faker.random.uuid(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    imageUrl: faker.internet.url(),
    quantity: 1,
  },
];

const makeSut = (cartItems = mockCartItems()) => {
  renderWithTheme(
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart: () => jest.fn(),
        removeItemToCart: () => jest.fn(),
      }}
    >
      <Cart />
    </CartContext.Provider>,
  );
};

describe('Cart Component', () => {
  test('Should render cartItems', () => {
    const cartItems = mockCartItems();
    makeSut(cartItems);
    expect(screen.getByTestId('quantity-items')).toHaveTextContent('2');
    fireEvent.click(screen.getByTestId('bag'));
    const cartList = screen.getByTestId('cart-list');
    expect(cartList.querySelectorAll('li')).toHaveLength(2);
    expect(screen.getByTestId(`${cartItems[0].title}-quantity`)).toHaveTextContent(
      cartItems[0].quantity,
    );
    expect(screen.getByTestId(`${cartItems[0].title}-title`)).toHaveTextContent(cartItems[0].title);
    expect(screen.getByTestId(`${cartItems[0].title}-image`)).toHaveAttribute(
      'src',
      cartItems[0].image,
    );
    expect(screen.getByTestId(`${cartItems[0].title}-price`)).toHaveTextContent(
      formatCurrency(cartItems[0].price),
    );

    const cart = screen.getByTestId('cart');
    fireEvent.click(screen.getByTestId('close-cart'));
    expect(cart).not.toBeInTheDocument();
  });

  test('Should call close cart', () => {
    makeSut();
    fireEvent.click(screen.getByTestId('bag'));
    const cart = screen.getByTestId('cart');
    fireEvent.click(screen.getByTestId('close-cart'));
    expect(cart).not.toBeInTheDocument();
  });
});
