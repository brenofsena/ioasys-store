import React from "react";
import Logo from "../logo/logo";
import Cart from "../cart/cart";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header data-testid="header">
      <S.Wrapper>
        <Logo />
        <Cart />
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
