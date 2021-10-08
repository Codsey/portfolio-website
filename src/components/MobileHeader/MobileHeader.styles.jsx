import styled from "styled-components";

export const PopupMobileMenuInner = styled.div`
  padding: 25px 40px;
  width: 375px;
  z-index: 999;
  position: absolute;
  background: #191b1e;
  height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 70%);
  opacity: 0;
  left: -150px;
  transition: all 0.5s ease-out;
`;

export const PopupMobileMenu = styled.div`
  z-index: 9999;
  position: fixed;
  content: "";
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-out;

  &.menu-open {
    visibility: visible;
    opacity: 1;

    & ${PopupMobileMenuInner} {
      opacity: 1;
      left: 0;
      overflow-y: auto;
    }
  }
`;

export const PopupMobileMenuTop = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 20px;
`;

export const PopupMobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopupMobileMenuHeaderDescription = styled.p`
  font-size: 16px;
  line-height: 32px;
  margin-top: 20px;
  color: #c4cfde;
  padding-right: 7%;
`;

export const PopupMobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopupMobileMenuNavPills = styled.ul`
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const NavItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #878e99;
  display: block;
  margin: 8px 0;
`;

export const NavLink = styled.a`
  color: #c4cfde;
  position: relative;
  transition: 0.4s;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  display: inline;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #c4cfde;
  }
`;

export const SocialShare = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  margin-top: 100px !important;
`;

export const SocialShareTitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  color: #c4cfde;
  display: inline-block;
  margin-bottom: 20px;
`;
