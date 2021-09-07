import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 100px 0;
  position: relative;

  &:before {
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

export const FooterArea = styled.div`
  text-align: center;
`;

export const FooterLogo = styled.div`
  & > img {
    max-height: 100px;
  }
`;

export const FooterDescription = styled.p`
  font-size: 17px;
  color: #878e99;
  font-family: "Poppins", sans-serif;
`;
