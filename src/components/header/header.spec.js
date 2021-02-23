import React from 'react';
import { Router } from 'react-router-dom';
import { screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { renderWithTheme } from '../../utils/test/helpers';
import { setCurrentAccount, getCurrentAccount } from '../../utils/helpers';
import { AccountContext } from '../../contexts';
import Header from './header';
import faker from 'faker';

const mockAccount = () => ({
  address: faker.address.streetAddress(),
  pocId: faker.random.uuid(),
  cartItems: [],
});

const makeSut = (account = mockAccount()) => {
  const history = createMemoryHistory({ initialEntries: ['/produtos'] });
  setCurrentAccount(account);

  renderWithTheme(
    <AccountContext.Provider value={{ getCurrentAccount, setCurrentAccount }}>
      <Router history={history}>
        <Header />
      </Router>
    </AccountContext.Provider>,
  );

  return {
    history,
  };
};

describe('Header Component', () => {
  beforeEach(() => localStorage.clear());

  test('Should call logout', () => {
    const { history } = makeSut();
    fireEvent.click(screen.getByTestId('logout'));
    expect(history.location.pathname).toBe('/');
  });

  test('Should render correct address', () => {
    const account = mockAccount();
    makeSut(account);
    expect(screen.getByTestId('address')).toHaveTextContent(account.address);
  });

  test('Should fix header on scroll', () => {
    makeSut();
    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(screen.getByTestId('header')).toHaveStyle('position: fixed;');
  });
});
