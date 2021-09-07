import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  ContactAbout,
  ContactAboutDescription,
  ContactAboutThumbnail,
  ContactAboutTitle,
  ContactForm,
  ContactFormIntroduce,
  ContactFormWrapper,
  ContactLinks,
  ContactRow,
  ContactSubtitle,
  ContactTitle,
  ContactTitleWrapper,
  ContactWrapper,
  FormGroup,
  FormInput,
  FormLabel,
  FormSubmitButton,
  FormTextarea,
} from "./Contact.styles";

import {
  SocialTitle,
  SocialList,
  SocialListItem,
  SocialListItemLink,
} from "../Home/Home.styles";

import { ReactComponent as FacebookLogo } from "../../assets/icons/facebook.svg";
import { ReactComponent as InstagramLogo } from "../../assets/icons/instagram.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/icons/linkedin.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/arrow-right.svg";

import ContactImage from "../../assets/images/contact.png";

const Contact = () => {
  return (
    <ContactWrapper>
      <Container>
        <Row>
          <Col lg={12}>
            <ContactTitleWrapper>
              <ContactSubtitle>Contact</ContactSubtitle>
              <ContactTitle>Contact Me</ContactTitle>
            </ContactTitleWrapper>
          </Col>
        </Row>
        <ContactRow>
          <Col lg={5}>
            <ContactAbout>
              <ContactAboutThumbnail>
                <img src={ContactImage} alt="Handshake" />
              </ContactAboutThumbnail>
              <ContactAboutTitle>
                <h4>Mohamed Aly</h4>
                <span>Fullstack Web Developer</span>
              </ContactAboutTitle>
              <ContactAboutDescription>
                <p>I am available for work habibi!</p>
                <span>
                  Phone:{" "}
                  <ContactLinks href="tel:+000000000000">
                    +000000000000
                  </ContactLinks>
                </span>
                <span>
                  Email:{" "}
                  <ContactLinks href="emailto:codsey@codsey.com">
                    codsey@codsey.com
                  </ContactLinks>
                </span>
              </ContactAboutDescription>
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
            </ContactAbout>
          </Col>
          <Col lg={7}>
            <ContactFormWrapper>
              <ContactFormIntroduce>
                <ContactForm className="row">
                  <Col lg={6}>
                    <FormGroup>
                      <FormLabel>Your Name</FormLabel>
                      <FormInput name="contact-name" type="text" />
                    </FormGroup>
                  </Col>
                  <Col lg={6}>
                    <FormGroup>
                      <FormLabel>Phone Number</FormLabel>
                      <FormInput name="contact-phone" type="text" />
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormInput name="contact-email" type="email" />
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormInput name="contact-subject" type="text" />
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <FormGroup>
                      <FormLabel>Your Message</FormLabel>
                      <FormTextarea
                        name="contact-message"
                        cols="30"
                        rows="10"
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={12}>
                    <FormSubmitButton name="submit" type="submit">
                      SEND MESSAGE <RightArrow />
                    </FormSubmitButton>
                  </Col>
                </ContactForm>
              </ContactFormIntroduce>
            </ContactFormWrapper>
          </Col>
        </ContactRow>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
