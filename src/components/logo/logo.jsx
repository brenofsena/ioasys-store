import React from "react";
import * as S from "./styles";
import { ReactComponent as IoasysLogo } from "assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <S.Wrapper>
      <Link to="/">
        <IoasysLogo />
      </Link>
    </S.Wrapper>
  );
};

export default Logo;
