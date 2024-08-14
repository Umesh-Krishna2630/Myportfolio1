import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
