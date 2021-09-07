import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  FooterArea,
  FooterDescription,
  FooterLogo,
  FooterWrapper,
} from "./Footer.styles";

import CodseyLogo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <FooterArea>
              <FooterLogo>
                <img src={CodseyLogo} />
              </FooterLogo>
              <FooterDescription>
                © {new Date().getFullYear()}. All rights reserved by Codsey
              </FooterDescription>
            </FooterArea>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
