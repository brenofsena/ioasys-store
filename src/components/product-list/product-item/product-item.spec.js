import React from 'react';
import { screen } from '@testing-library/react';
import ProductItem from './product-item';
import { renderWithTheme } from '../../../utils/test/helpers';
import { formatCurrency } from '../../../utils/helpers';
import faker from 'faker';

const mockProduct = () => ({
  id: faker.random.uuid(),
  title: faker.commerce.productName(),
  images: [
    {
      url: faker.internet.url(),
    },
  ],
  productVariants: [
    {
      price: faker.commerce.price(),
    },
  ],
});

const makeSut = (product = mockProduct()) => {
  renderWithTheme(
    <ProductItem
      id={product.id}
      title={product.title}
      images={product.images}
      productVariants={product.productVariants}
    />,
  );
};

describe('ProductItem Component', () => {
  test('Should render with correct values', () => {
    const product = mockProduct();
    makeSut(product);
    expect(screen.getByTestId('image')).toHaveAttribute('src', product.images[0].url);
    expect(screen.getByTestId('title')).toHaveTextContent(product.title);
    expect(screen.getByTestId('price')).toHaveTextContent(
      formatCurrency(product.productVariants[0].price),
    );
  });
});
