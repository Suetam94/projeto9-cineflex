import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  max-width: 375px;
  width: 100%;
  background: #fff;
  font-family: "Roboto", sans-serif;
}
`;
