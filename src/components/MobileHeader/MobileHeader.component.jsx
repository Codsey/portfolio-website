import React from "react";
import {
  NavItem,
  NavLink,
  PopupMobileMenu,
  PopupMobileMenuContent,
  PopupMobileMenuHeader,
  PopupMobileMenuHeaderDescription,
  PopupMobileMenuInner,
  PopupMobileMenuNavPills,
  PopupMobileMenuTop,
  SocialShare,
  SocialShareTitle,
} from "./MobileHeader.styles";

import { LogoImage } from "../Header/Header.styles";

import {
  SocialList,
  SocialListItem,
  SocialListItemLink,
} from "../../Sections/Home/Home.styles";

import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";

const MobileHeader = ({ open }) => {
  return (
    <PopupMobileMenu className={open ? "menu-open" : ""}>
      <PopupMobileMenuInner>
        <PopupMobileMenuTop>
          <PopupMobileMenuHeader>
            <a href="index.html">
              <LogoImage />
            </a>
          </PopupMobileMenuHeader>
          <PopupMobileMenuHeaderDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PopupMobileMenuHeaderDescription>
        </PopupMobileMenuTop>
        <PopupMobileMenuContent>
          <PopupMobileMenuNavPills>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#home">Contact</NavLink>
            </NavItem>
          </PopupMobileMenuNavPills>
          <SocialShare>
            <SocialShareTitle>Find me</SocialShareTitle>
            <SocialList>
              <SocialListItem>
                <SocialListItemLink>
                  <FacebookLogo />
                </SocialListItemLink>
              </SocialListItem>
              <SocialListItem>
                <SocialListItemLink>
                  <InstagramLogo />
                </SocialListItemLink>
              </SocialListItem>
              <SocialListItem>
                <SocialListItemLink>
                  <LinkedInLogo />
                </SocialListItemLink>
              </SocialListItem>
            </SocialList>
          </SocialShare>
        </PopupMobileMenuContent>
      </PopupMobileMenuInner>
    </PopupMobileMenu>
  );
};

export default MobileHeader;
