import styled from "styled-components";

export const Main = styled.main`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    height: 110px;
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 30px;
  grid-row-gap: 11px;
  padding: 0 25px 0 30px;
`;
