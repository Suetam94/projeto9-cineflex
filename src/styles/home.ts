import styled from "styled-components";

export const Main = styled.main`
  max-width: 375px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-column-gap: 30px;
  grid-row-gap: 11px;
`;
