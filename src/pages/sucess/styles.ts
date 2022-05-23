import styled from "styled-components";

export const SucessContainer = styled.div`
  max-width: 375px;
  width: 100%;
  padding-bottom: 190px;

  h1 {
    max-width: 171px;
    width: 100%;
    height: 110px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247a6b;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  div {
    height: 110px;
    padding-left: 28px;
    
    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.04em;
      color: #293845;

      &.text {
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
      }
    }
  }
  
  button {
    margin-top: 62px;
  }
`;
