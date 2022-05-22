import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 375px;
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;

  h1 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #e8833a;
    text-transform: uppercase;
  }
`;
