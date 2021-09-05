import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  FeaturesSubtitle,
  FeaturesTitle,
  FeaturesTitleWrapper,
  FeaturesWrapper,
  LayoutIcon,
} from "./Features.styles";

import FeaturesCardComponent from "../../components/FeaturesCard/FeaturesCard.component";

const Features = () => {
  return (
    <FeaturesWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <FeaturesTitleWrapper>
              <FeaturesSubtitle>FEATURES</FeaturesSubtitle>
              <FeaturesTitle>What I Do</FeaturesTitle>
            </FeaturesTitleWrapper>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xl={4} sm={12}>
            <FeaturesCardComponent title={"Coming Soon"} icon={<LayoutIcon />}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur at soluta aliquam debitis harum corrupti excepturi eum
              nostrum incidunt voluptate delectus error cupiditate ex, id
              expedita labore itaque aspernatur.
            </FeaturesCardComponent>
          </Col>
          <Col lg={6} xl={4} sm={12}>
            <FeaturesCardComponent title={"Coming Soon"} icon={<LayoutIcon />}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur at soluta aliquam debitis harum corrupti excepturi eum
              nostrum incidunt voluptate delectus error cupiditate ex, id
              expedita labore itaque aspernatur.
            </FeaturesCardComponent>
          </Col>
          <Col lg={6} xl={4} sm={12}>
            <FeaturesCardComponent title={"Coming Soon"} icon={<LayoutIcon />}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              pariatur at soluta aliquam debitis harum corrupti excepturi eum
              nostrum incidunt voluptate delectus error cupiditate ex, id
              expedita labore itaque aspernatur.
            </FeaturesCardComponent>
          </Col>
        </Row>
      </Container>
    </FeaturesWrapper>
  );
};

export default Features;
