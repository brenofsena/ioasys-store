import styled from "styled-components";
import { rem } from "polished";

export const Header = styled.header`
  background: ${(props) => props.theme.colors.secondary};
  min-height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 0 16px;
`;

export const Bag = styled.button`
  background: none;
  border: 0;
  box-shadow: none;
  outline: 0;
  cursor: pointer;
  margin-left: ${rem("40px")};
  display: flex;
  align-items: center;

  > span {
    color: #fff;
    font-size: ${rem("14px")};
  }
`;
