import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Footer from './footer';

const makeSut = () => {
  renderWithTheme(<Footer />);
};

describe('Footer Component', () => {
  test('Should render correct', () => {
    makeSut();
    expect(screen.getByTestId('copyright')).toHaveTextContent(
      '© 2021 Ioasys - Todos os direitos reservados.',
    );
  });
});
