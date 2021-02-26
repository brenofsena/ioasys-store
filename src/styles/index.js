import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = {
  colors: {
    primary: '#ee4c77',
    secondary: '#000',
    white: '#fff',
    whiteSoft: '#fafafa',
    black: '#000',
    gray: '#959595',
    green: '#4caf50',
  },
  borderRadius: '8px',
  font: {
    fontFamily: 'Roboto',
    regular: 400,
    medium: 500,
    bold: 700,
  },
  boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75.5%;
  }

  body {
    font-family: ${theme.font.fontFamily};
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 10px;
    border: 5px solid transparent;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  .slick-list {
    margin: 0 -5px;
  }
  .slick-slide > div {
    padding: 0 5px;
  }

  .slick-dots {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    bottom: 100%;
    right: 0;
    transform: translateY(-20px);

    li {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 20px;
      cursor: pointer;
      transition: width 0.3s, border 0.3s;
      background: ${theme.colors.primary};
      padding: 0;

      &.slick-active {
        width: 24px;
        border-radius: 20px;
        background: ${theme.colors.primary};
      }

      button {
        &:before {
          font-size: 0;
        }
      }
    }
  }
`;

export { GlobalStyle, theme };
