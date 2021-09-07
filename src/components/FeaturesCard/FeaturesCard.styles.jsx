import styled from "styled-components";

import { ReactComponent as RightArrowIconSvg } from "../../assets/icons/arrow-right.svg";

export const FeaturesCard = styled.div`
  text-align: left;
  padding: 35px 50px 35px 50px;
  transition: 0.5s all ease-in-out;
  border-radius: 10px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  position: relative;
  z-index: 1;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: linear-gradient(to right bottom, #212428, #16181c);
    opacity: 0;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  @media only screen and (max-width: 767px) {
    padding: 30px 30px 30px 30px;
  }

  @media only screen and (max-width: 479px) {
    padding: 20px;
  }
`;

export const FeaturesCardWrapper = styled.div`
  margin-top: 50px;
`;

export const FeaturesIcon = styled.div`
  transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transform: translateY(20px);
  margin-bottom: 29px;
`;

export const FeaturesContent = styled.div`
  transition: 700ms cubic-bezier(0.17, 0.67, 0, 1.01);
  transform: translateY(20px);
`;

export const FeaturesCardTitle = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 20px;
  color: #c4cfde;
`;

export const FeaturesCardDescription = styled.p`
  font-size: 16px;
  line-height: 28px;
  color: #c4cfde;
  margin-bottom: 22px;
  transition: 0.4s;
`;

export const FeaturesReadMoreButton = styled.a`
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: 0.4s;
`;

export const RightArrowIcon = styled(RightArrowIconSvg)`
  color: #ff014f;
  font-size: 32px;
`;
