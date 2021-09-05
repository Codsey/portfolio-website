import styled from "styled-components";
import { Row } from "reactstrap";

export const ContactWrapper = styled.div`
  padding: 100px 0;
  position: relative;

  &::before {
    position: absolute;
    max-width: 1270px;
    height: 1px;
    background: #121415;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const ContactTitleWrapper = styled.div`
  text-align: center;
`;

export const ContactSubtitle = styled.span`
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 14px;
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`;

export const ContactTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #c4cfde;
  margin-top: 15px;
  margin-bottom: 0;
`;

export const ContactRow = styled(Row)`
  margin-top: 50px;
`;

export const ContactAbout = styled.div`
  padding: 30px;
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  border-radius: 10px;
  background-color: #212428;
  height: 100%;
`;

export const ContactAboutThumbnail = styled.div`
  margin-bottom: 28px;
  overflow: hidden;
  border-radius: 10px;

  & > img {
    width: 100%;
    height: auto;
    transition: 0.4s;
    max-width: 100%;
  }
`;

export const ContactAboutTitle = styled.div`
  margin-bottom: 15px;

  & > h4 {
    font-size: 29px;
    line-height: 44px;
    color: #e4e6ea;
    margin-bottom: 9px;
  }
`;

export const ContactAboutDescription = styled.div`
  margin-bottom: 39px;

  & > p {
    font-size: 18px;
    font-weight: 400;
    color: #878e99;
    font-family: "Poppins", sans-serif;
    line-height: 30px;
    display: inline-block;
    margin-bottom: 20px;
  }

  & > span {
    display: block;
  }
`;

export const ContactLinks = styled.a`
  transition: 0.4s;
  position: relative;
  color: #c4cfde;
  font-weight: 400;

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    background-color: #ff014f;
    height: 1px;
    left: 0;
    bottom: 2px;
    transition: 0.4s;
    z-index: 10;
  }

  &:hover {
    color: #ff014f;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const ContactFormWrapper = styled.div`
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  padding: 30px;
  border-radius: 10px;
  margin-left: 20px;
  height: 100%;
`;

export const ContactFormIntroduce = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContactForm = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  font-size: 12px;
  color: #a0a8b3;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 14px;
  text-align: left;
  display: block;
  line-height: 22px;
`;

export const FormInput = styled.input`
  background-color: #191b1e;
  border-radius: 6px;
  height: 55px;
  transition: 0.4s;
  border: 2px solid #191b1e;
  padding: 0 15px;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  color: #c4cfde;
  box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
    -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
  letter-spacing: 1px;
  width: 100%;
  outline: none;

  &:focus {
    background-color: #191b1e;
    color: #e4e6ea;
    border-color: #ff014f;
    box-shadow: none;
  }
`;

export const FormTextarea = styled.textarea`
  min-height: 235px;
  background-color: #191b1e;
  border-radius: 6px;
  padding: 0;
  transition: 0.4s;
  border: 2px solid #191b1e;
  padding: 10px 15px;
  font-size: 14px;
  line-height: 18px;
  font-family: "Montserrat", sans-serif;
  color: #c4cfde;
  box-shadow: 1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset,
    -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset;
  letter-spacing: 1px;
  resize: none;
  outline: none;
  width: 100%;

  &:focus {
    background-color: #191b1e;
    color: #e4e6ea;
    border-color: #ff014f;
    box-shadow: none;
  }
`;

export const FormSubmitButton = styled.button`
  display: inline-block;
  padding: 15px 35px;
  list-style: none;
  text-decoration: none;
  color: #ff014f;
  -webkit-appearance: button;
  border-radius: 6px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  transition: 0.4s;
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 500;
  border: 0 none;
  cursor: pointer;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    top: 0;
    left: 0;
    background: linear-gradient(to right bottom, #212428, #16181c);
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px);
  }

  &:hover::before {
    opacity: 1;
  }
`;
