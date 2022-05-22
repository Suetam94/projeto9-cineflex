import styled from "styled-components";

export const SeatsGeneralContainer = styled.div`
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
    justify-content: center;
    letter-spacing: 0.04em;
    color: #293845;
    height: 110px;
  }
`;

export const SeatsSectionContainer = styled.div`
  padding: 0 24px;
  display: grid;
  grid-template-columns: repeat(10, auto);
  grid-column-gap: 7px;
  grid-row-gap: 18px;
  text-align: center;
`;

export const Seat = styled.div`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 12px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
  color: #000000;
  cursor: pointer;
  
  &.not-available {
    background: #F7C52B;
    cursor: not-allowed;
  }
`;
