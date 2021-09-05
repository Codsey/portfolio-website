import React from "react";
import { Row, Col, Container } from "reactstrap";
import PortfolioCardComponent from "../../components/PortfolioCard/PortfolioCard.component";
import {
  BlogSectionTitleWrapper,
  BlogSubtitle,
  BlogTitle,
  BlogWrapper,
} from "./Blogs.styles";

import ComingSoonImage from "../../assets/images/coming-soon.jpg";

const Blog = () => {
  return (
    <BlogWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <BlogSectionTitleWrapper>
              <BlogSubtitle>VISIT MY BLOG</BlogSubtitle>
              <BlogTitle>My Blog</BlogTitle>
            </BlogSectionTitleWrapper>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xl={4} md={6}>
            <PortfolioCardComponent
              category={"Web Development"}
              title={"Coming Soon"}
              imageUrl={ComingSoonImage}
            ></PortfolioCardComponent>
          </Col>
        </Row>
      </Container>
    </BlogWrapper>
  );
};

export default Blog;
