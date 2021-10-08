import styled from "styled-components";
import { Row } from "reactstrap";

import logo from "../../assets/images/logo.png";

export const DefaultHeader = styled.header`
  position: absolute;
  top: 0;
  z-index: 999;
  width: 100%;
  transition: 0.3s;
`;

export const HeaderWrapper = styled(Row)`
  -ms-flex-align: center !important;
  -webkit-box-align: center !important;
  -webkit-align-items: center !important;
  align-items: center !important;
  height: 122px;
  padding: 0 64px;
  margin: 0;

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    padding: 0 30px;
  }
`;

export const HeaderLeft = styled.div`
  flex-basis: 20%;
  justify-content: flex-start;
  display: flex;
`;

export const LogoImage = styled.img.attrs({
  src: `${logo}`,
})`
  -ms-interpolation-mode: bicubic;
  border: 0;
  vertical-align: middle;
  max-width: 100%;
  height: auto;
`;

export const HeaderCenter = styled.div`
  flex-basis: 100%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

export const MainMenu = styled.nav`
  display: none !important;
  @media (min-width: 1200px) {
    display: block !important;
  }
`;

export const MenuLink = styled.a`
  outline: none;
  cursor: pointer;
  text-decoration: none;
  display: block;
  margin: 0.5rem 1rem;
  padding: 0;
  color: #c4cfde;
  position: relative;
  transition: 0.4s;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
`;

export const PrimaryMenu = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin: -24px;
  padding: 0;

  &:hover ${MenuLink} {
    opacity: 0.5;
  }
`;

export const MenuItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  color: #878e99;
  margin: 10px 14px;
  transition: 0.3s;

  &:hover ${MenuLink} {
    opacity: 1 !important;
    color: #ffffff;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    margin: 10px 5px;
  }
`;

export const ActiveMenuLink = styled(MenuLink)`
  opacity: 1 !important;
  color: #ffffff;
`;

export const HeaderRight = styled.div`
  margin-left: 30px;
  justify-content: flex-end;
  display: flex;
  margin-right: -18px;
`;

export const HeaderRightButton = styled.a`
  display: inline-block;
  list-style: none;
  text-decoration: none;
  color: #ff014f !important;
  border-radius: 6px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.4s;
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 500;
  border: 0 none;
  cursor: pointer;
  padding: 15px 35px;

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
    transform: translateY(-5px);
  }

  @media only screen and (min-width: 1200px) and (max-width: 1599px) {
    font-size: 13px;
    padding: 17px 19px;
    line-height: 21px;
  }

  @media only screen and (max-width: 1200px) {
    display: none !important;
  }
`;

export const HeaderHambergerMenuButton = styled.div`
  display: block !important;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
  z-index: 99999;
  
  & .line {
    fill: none;
    stroke: #ff014f;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  & .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  & .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  & .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  &.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  &.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  &.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

  @media (min-width: 1200px) {
    display: none !important;
  }
`;
