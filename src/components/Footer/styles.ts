import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 375px;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  position: sticky;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;

  div {
    width: 64px;
    height: 89px;
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 48px;
      height: 72px;
    }
  }
  
  p.info {
    display: flex;
    flex-direction: column;
  }

  span {
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left: 14px;
  }
`;
