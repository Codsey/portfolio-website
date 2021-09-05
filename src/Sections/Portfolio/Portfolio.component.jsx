import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  PortfolioCard,
  PortfolioCardWrapper,
  PortfolioCategory,
  PortfolioContent,
  PortfolioContentCategory,
  PortfolioContentCategoryList,
  PortfolioContentTitle,
  PortfolioSubtitle,
  PortfolioThumbnail,
  PortfolioTitle,
  PortfolioTitleWrapper,
  PortfolioWrapper,
} from "./Portfolio.styles";

import ComingSoonImage from "../../assets/images/coming-soon.jpg";

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
            <PortfolioCardWrapper>
              <PortfolioCard>
                <div className="inner">
                  <PortfolioThumbnail>
                    <img src={ComingSoonImage} alt="coming soon" />
                  </PortfolioThumbnail>
                  <PortfolioContent>
                    <PortfolioContentCategory>
                      <PortfolioContentCategoryList>
                        <PortfolioCategory>Web Development</PortfolioCategory>
                      </PortfolioContentCategoryList>
                    </PortfolioContentCategory>
                    <PortfolioContentTitle>Coming Soon</PortfolioContentTitle>
                  </PortfolioContent>
                </div>
              </PortfolioCard>
            </PortfolioCardWrapper>
          </Col>
        </Row>
      </Container>
    </PortfolioWrapper>
  );
};

export default Portfolio;
