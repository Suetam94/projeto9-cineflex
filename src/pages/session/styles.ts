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
  border-radius: 50%;
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
    background: #fbe192;
    border: 1px solid #f7c52b;
    cursor: not-allowed;
  }

  &.selected {
    background: #8dd7cf;
    border: 1px solid #45bdb0;
  }
`;

export const SeatsLegendContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 16px;
  padding: 0 50px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: -0.013em;
      color: #4e5a65;
      text-align: center;
      margin-top: 13px;
      cursor: default;
    }
  }
`;

export const SeatLegend = styled.div`
  width: 26px;
  height: 26px;
  background: #c3cfd9;
  border: 1px solid #808f9d;
  border-radius: 50%;
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

  &.not-available {
    background: #fbe192;
    border: 1px solid #f7c52b;
  }

  &.selected {
    background: #8dd7cf;
    border: 1px solid #45bdb0;
  }
`;

export const FormContainer = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  
  label {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
    
    &:not(&:first-child) {
      margin-top: 10px;
      margin-bottom: 57px;
    }
    
    input {
      width: 327px;
      height: 51px;
      background: #FFFFFF;
      border: 1px solid #D5D5D5;
      border-radius: 3px;
      padding-left: 18px;
      outline: none;
      font-size: 18px;
      
      &::placeholder {
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #AFAFAF;
      }
    }
  }
  
  button {
    margin-bottom: 30px;
  }
`;
