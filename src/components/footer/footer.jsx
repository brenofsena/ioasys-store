import React from "react";
import { Logo } from "components";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <Logo />
        <S.Copyright data-testid="copyright">
          © 2021 Ioasys - Todos os direitos reservados.
        </S.Copyright>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
