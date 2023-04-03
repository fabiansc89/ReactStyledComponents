import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }

  body {
    line-height: 1.5;
    margin: 0;
    
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.color};
  }
`;

export { GlobalStyles };