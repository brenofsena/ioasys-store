import React from "react";
import { Logo, Cart } from "components";
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
