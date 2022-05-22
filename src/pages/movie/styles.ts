import styled from "styled-components";

export const MovieHourContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  width: 375px;

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

export const MovieSelectHourContainer = styled.div`
  padding-left: 25px;

  h4 {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
    margin-top: 23px;

    &:first-child {
      margin-top: 0;
    }
  }

  div {
    display: flex;

    button {
      width: 83px;
      height: 43px;
      background: #e8833a;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #ffffff;
      border: 0;
      margin: 22px 8px 22px 0;
      cursor: pointer;
      transition: filter 0.2s;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
