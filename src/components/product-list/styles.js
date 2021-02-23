import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  padding: 20px 16px;
  background: #fff;
  position: relative;
`;

export const ProductList = styled.div`
  max-width: 1200px;
  width: 100%;
  flex-grow: 1;
  padding: 0 16px;
  margin: 20px 0;
`;

export const Category = styled.h1`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${rem("16px")};
  font-weight: ${(props) => props.theme.font.regular};
  text-transform: uppercase;
  margin-bottom: 16px;
`;
