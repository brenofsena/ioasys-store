import styled from "styled-components";
import { rem } from "polished";

export const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
  margin-bottom: ${rem("16px")};
`;

export const ProductTitle = styled.h1`
  color: ${(props) => props.theme.colors.gray};
  font-weight: 500;
  font-size: ${rem("18px")};
`;
