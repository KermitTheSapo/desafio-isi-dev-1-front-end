import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6, p, a, label {
    font-family: 'Inter', sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
