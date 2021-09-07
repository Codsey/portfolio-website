import styled from "styled-components";

export const PortfolioWrapper = styled.div`
  padding: 100px 0;
  position: relative;

  &::before {
    position: absolute;
    max-width: 1270px;
    height: 1px;
    background: #121415;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const PortfolioTitleWrapper = styled.div`
  text-align: center;
`;

export const PortfolioSubtitle = styled.span`
  text-transform: uppercase;
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 14px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 575px) {
    text-align: center;
  }

  @media only screen and (max-width: 479px) {
    line-height: 24px;
    letter-spacing: 1px;
    text-align: center;
    padding: 0 20px;
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`;

export const PortfolioTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #c4cfde;
  margin-top: 15px;
  margin-bottom: 0;

  @media only screen and (max-width: 767px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 575px) {
    text-align: center;
    margin: 0;
    font-size: 34px;
  }
`;
