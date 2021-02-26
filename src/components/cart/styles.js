import styled from 'styled-components';
import { rem } from 'polished';

export const CartFade = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.3);
`;

export const Cart = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 25%;
  background: ${(props) => props.theme.colors.whiteSoft};
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.boxShadow};
  z-index: 30;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  padding: ${rem('16px')};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #fff;
  position: relative;

  > h3 {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${rem('22px')};
  }

  > svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const CartList = styled.ul`
  flex-grow: 1;
  list-style: none;
  padding: ${rem('16px')};
  overflow-y: auto;

  > li {
    margin: ${rem('16px')};

    > div {
      background: #fff;
      cursor: pointer;
      transition: all 300ms ease;
      display: flex;
      align-items: center;
      flex-flow: row;
      justify-content: space-between;
      border-radius: 8px;
      padding: ${rem('16px')};

      > img {
        width: 50px;
      }

      > p {
        color: ${(props) => props.theme.colors.gray};
        font-size: ${rem('16px')};
        font-weight: ${(props) => props.theme.font.medium};
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        max-width: 120px;
        flex-grow: 1;
      }

      > span {
        color: ${(props) => props.theme.colors.secondary};
        font-size: ${rem('14px')};
        font-weight: ${(props) => props.theme.font.bold};
      }

      > button {
        background: none;
        border: 0;
        box-shadow: none;
        outline: 0;
        cursor: pointer;
      }

      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

export const CartFooter = styled.div`
  flex-grow: 1;
  padding: ${rem('16px')};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const CartTotals = styled.span`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${rem('16px')};
  font-weight: ${(props) => props.theme.font.medium};

  > strong {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CartEmpty = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    color: ${(props) => props.theme.colors.gray};
    font-size: ${rem('16px')};
    font-weight: ${(props) => props.theme.font.medium};
    text-align: center;
  }
`;

export const Bag = styled.button`
  background: none;
  border: 0;
  box-shadow: none;
  outline: 0;
  cursor: pointer;
  margin-left: ${rem('40px')};
  display: flex;
  align-items: center;

  > span {
    color: #fff;
    font-size: ${rem('14px')};
  }
`;
