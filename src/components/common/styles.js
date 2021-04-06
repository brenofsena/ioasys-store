import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.whiteSoft};
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ProductImage = styled.img`
  text-align: center;
  flex: 1;
  display: block;
  max-width: 200px;
  width: 100%;
  height: auto;
  flex-grow: 1;
`;

export const ProductTitle = styled.h2`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${rem("16px")};
  font-weight: ${(props) => props.theme.font.medium};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 120px;
  flex-grow: 1;
`;

export const ProductPrice = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${rem("14px")};
  font-weight: ${(props) => props.theme.font.bold};
  margin-top: 16px;
`;

const BaseButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: solid 1px ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: none;
  padding: ${rem("16px")};
  font-weight: ${(props) => props.theme.font.medium};
  font-size: ${rem("16px")};
  border-radius: ${(props) => props.theme.borderRadius};
  outline: 0;
  text-shadow: none;
  font-family: Roboto;
  cursor: pointer;
`;

export const ProductBuyButton = styled(BaseButton)`
  background: ${(props) => props.theme.colors.green};
  border-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  font-size: ${rem("14px")};
  font-weight: ${(props) => props.theme.font.bold};
  margin-top: 16px;
  min-width: 200px;
`;
