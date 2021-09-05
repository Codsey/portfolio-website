import React from "react";
import {
  DefaultHeader,
  HeaderWrapper,
  HeaderLeft,
  LogoImage,
  HeaderCenter,
  MainMenu,
  PrimaryMenu,
  MenuItem,
  MenuLink,
  HeaderRight,
  HeaderRightButton,
} from "./Header.styles";
import { Col } from "reactstrap";

const Header = () => {
  return (
    <DefaultHeader>
      <HeaderWrapper>
        <Col lg={2} sm={6}>
          <HeaderLeft>
            <div className="logo">
              <a href="/">
                <LogoImage />
              </a>
            </div>
          </HeaderLeft>
        </Col>
        <Col lg={10} sm={6}>
          <HeaderCenter>
            <MainMenu>
              <PrimaryMenu>
                <MenuItem>
                  <MenuLink>Home</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Features</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Portfolio</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Resume</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Clients</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Pricing</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Blog</MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink>Contact</MenuLink>
                </MenuItem>
              </PrimaryMenu>
            </MainMenu>
            <HeaderRight>
              <HeaderRightButton>
                <span>HIRE ME</span>
              </HeaderRightButton>
            </HeaderRight>
          </HeaderCenter>
        </Col>
      </HeaderWrapper>
    </DefaultHeader>
  );
};

export default Header;
