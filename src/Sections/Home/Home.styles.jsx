import styled from "styled-components";
import { Row } from "reactstrap";

import { ReactComponent as ReactLogoSvg } from "../../assets/icons/react-logo.svg";
import { ReactComponent as NodeLogoSvg } from "../../assets/icons/node-logo.svg";
import { ReactComponent as ReduxLogoSvg } from "../../assets/icons/redux-logo.svg";

export const HomeWrapper = styled.div`
  padding-bottom: 100px;
  position: relative;
  padding-top: 150px;
`;

export const HomeRow = styled(Row)`
  -ms-flex-align: center !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  align-items: center !important;

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    margin-left: -15px;
    margin-right: -15px;
  }
`;

export const HomeContent = styled.div`
  margin-top: 0;
`;

export const HomeContentInner = styled.div`
  margin-bottom: 142px;

  @media only screen and (max-width: 1199px) {
    margin-bottom: 40px !important;
  }
`;

export const HomeSubtitle = styled.span`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #c4cfde;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  display: block;
  margin-bottom: 20px;

  @media only screen and (max-width: 479px) {
    letter-spacing: 1px;
  }
`;

export const HomeTitle = styled.h1`
  color: #ffffff;
  font-weight: 700;
  font-size: 60px;
  line-height: 75px;
  margin-bottom: 22px;
  font-family: "Montserrat", sans-serif;

  @media only screen and (max-width: 767px) {
    font-size: 50px;
    line-height: 60px;
  }

  @media only screen and (max-width: 479px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const HomeTitleName = styled.span`
  color: #ff014f;
`;

export const HomeParagraph = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #c4cfde;
  padding-right: 16%;
  opacity: 0.9;

  @media only screen and (max-width: 767px) {
    margin-bottom: 40px;
    padding-right: 0;
  }
`;

export const SocialTitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 300;
  color: #c4cfde;
  display: inline-block;
  margin-bottom: 20px;
`;

export const SocialList = styled.ul`
  display: -ms-flexbox !important;
  display: -webkit-box !important;
  display: -webkit-flex !important;
  display: flex !important;
  padding: 0;
  list-style: none;
  margin: -10px -12px;
  flex-wrap: wrap;
`;

export const SocialListItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #878e99;
  margin: 10px 12px;
`;

export const SocialListItemLink = styled.a`
  outline: none;
  text-decoration: none;
  color: #f6f6f6;
  cursor: pointer;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 6px;
  transition: 0.4s;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    top: 0;
    left: 0;
    background: linear-gradient(to right bottom, #212428, #16181c);
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ReactLogo = styled(ReactLogoSvg)`
  max-height: 23px;
  width: auto;
`;

export const NodeLogo = styled(NodeLogoSvg)`
  max-height: 23px;
  width: auto;
`;

export const ReduxLogo = styled(ReduxLogoSvg)`
  max-height: 23px;
  width: auto;
`;

export const Thumbnail = styled.div`
  position: relative;
  z-index: 2;

  &::before {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: calc(100% - 130px);
    content: "";
    left: 50%;
    bottom: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    background: linear-gradient(145deg, #1e2024, #23272b);
    box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
    border-radius: 6px;
  }
`;
