import { css } from '@emotion/react';
import Reset from './reset';
import theme from './theme';
import './fonts.css';

const GlobalStyle = css`
  ${Reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;

    overflow-x: hidden;
    overscroll-behavior-y: none;
    touch-action: manipulation;

    background-color: ${theme.colors['bg-gray2']};
    font-family: 'Pretendard', sans-serif;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  #root {
    width: 100%;
    max-width: 40.2rem;
    margin: 0 auto;
    min-height: 100vh;
    background-color: ${theme.colors['bg-white']};

    box-shadow: 0 0.8rem 2rem rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
`;

export default GlobalStyle;
