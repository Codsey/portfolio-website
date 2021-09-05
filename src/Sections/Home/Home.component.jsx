import React from "react";
import { Container, Col, Row } from "reactstrap";
import {
  HomeContent,
  HomeContentInner,
  HomeParagraph,
  HomeRow,
  HomeSubtitle,
  HomeTitle,
  HomeTitleName,
  HomeWrapper,
  NodeLogo,
  ReactLogo,
  ReduxLogo,
  SocialList,
  SocialListItem,
  SocialListItemLink,
  SocialTitle,
  Thumbnail,
} from "./Home.styles";

import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";

const Home = () => {
  return (
    <div id="home">
      <HomeWrapper>
        <Container>
          <HomeRow>
            <Col lg={{ size: 7, order: 1 }} order={2}>
              <HomeContent>
                <HomeContentInner>
                  <HomeSubtitle>Welcome to My World</HomeSubtitle>
                  <HomeTitle>
                    Hi, I'am <HomeTitleName>Mohamed Aly</HomeTitleName>
                    <br /> A Fullstack Developer
                  </HomeTitle>
                  <div>
                    <HomeParagraph>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic
                    </HomeParagraph>
                  </div>
                </HomeContentInner>
                <Row>
                  <Col lg={6}>
                    <div className="social-share">
                      <SocialTitle>Find Me</SocialTitle>
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
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="social-share">
                      <SocialTitle>Skill</SocialTitle>
                      <SocialList>
                        <SocialListItem>
                          <SocialListItemLink>
                            <ReactLogo />
                          </SocialListItemLink>
                        </SocialListItem>
                        <SocialListItem>
                          <SocialListItemLink>
                            <ReduxLogo />
                          </SocialListItemLink>
                        </SocialListItem>
                        <SocialListItem>
                          <SocialListItemLink>
                            <NodeLogo />
                          </SocialListItemLink>
                        </SocialListItem>
                      </SocialList>
                    </div>
                  </Col>
                </Row>
              </HomeContent>
            </Col>
            <Col lg={{ size: 5, order: 2 }} order={1}>
              <Thumbnail></Thumbnail>
            </Col>
          </HomeRow>
        </Container>
      </HomeWrapper>
    </div>
  );
};

export default Home;
