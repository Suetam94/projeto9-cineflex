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
  min-height: 100vh;
  background: #fff;
  font-family: "Roboto", sans-serif;
}

button {
  width: 225px;
  height: 42px;
  background: #E8833A;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  border: none;
  margin: 0 auto;
}
`;
