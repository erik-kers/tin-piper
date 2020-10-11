import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}
 
body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
