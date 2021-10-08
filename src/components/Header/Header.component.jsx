import React, { useState } from "react";
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
  HeaderHambergerMenuButton,
} from "./Header.styles";

import { Col } from "reactstrap";

import { ReactComponent as HambergerIconSvg } from "../../assets/icons/hamberger-icon.svg";
import MobileHeader from "../MobileHeader/MobileHeader.component";

const Header = () => {
  const [open, setOpen] = useState(false);
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
              <HeaderHambergerMenuButton
                className={open ? "opened" : ""}
                onClick={() => setOpen((prevState) => !prevState)}
              >
                <HambergerIconSvg />
              </HeaderHambergerMenuButton>
            </HeaderRight>
          </HeaderCenter>
        </Col>
      </HeaderWrapper>
      <MobileHeader open={open} />
    </DefaultHeader>
  );
};

export default Header;
