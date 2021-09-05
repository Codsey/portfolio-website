import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  PortfolioSubtitle,
  PortfolioTitle,
  PortfolioTitleWrapper,
  PortfolioWrapper,
} from "./Portfolio.styles";

import ComingSoonImage from "../../assets/images/coming-soon.jpg";
import PortfolioCardComponent from "../../components/PortfolioCard/PortfolioCard.component";

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <PortfolioTitleWrapper>
              <PortfolioSubtitle>MY LATEST WORK</PortfolioSubtitle>
              <PortfolioTitle>My Portfolio</PortfolioTitle>
            </PortfolioTitleWrapper>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xl={4} md={6}>
            <PortfolioCardComponent
              category={"Web Development"}
              title={"Coming Soon"}
              imageUrl={ComingSoonImage}
            />
          </Col>
          <Col lg={6} xl={4} md={6}>
            <PortfolioCardComponent
              category={"Web Development"}
              title={"Coming Soon"}
              imageUrl={ComingSoonImage}
            />
          </Col>
          <Col lg={6} xl={4} md={6}>
            <PortfolioCardComponent
              category={"Web Development"}
              title={"Coming Soon"}
              imageUrl={ComingSoonImage}
            />
          </Col>
        </Row>
      </Container>
    </PortfolioWrapper>
  );
};

export default Portfolio;
