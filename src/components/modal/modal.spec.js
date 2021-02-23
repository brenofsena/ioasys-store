import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Modal from './modal';

const makeSut = (open = true) => {
  renderWithTheme(
    <Modal open={open} close={() => jest.fn()}>
      <p>Content</p>
    </Modal>,
  );
};

describe('Modal Component', () => {
  test('Should render with correct content', () => {
    makeSut();
    expect(screen.getByTestId('modal-content').firstElementChild).toHaveTextContent('Content');
  });
});
