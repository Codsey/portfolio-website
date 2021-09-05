import styled from "styled-components";

import { ReactComponent as LayoutIconSvg } from "../../assets/icons/layout.svg";

export const FeaturesWrapper = styled.div`
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

export const FeaturesTitleWrapper = styled.div`
  text-align: left !important;
`;

export const FeaturesSubtitle = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #f9004d;
  letter-spacing: 1px;
  display: block;
  line-height: 14px;
`;

export const FeaturesTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  line-height: 1.2;
  color: #c4cfde;
  margin-top: 15px;
  margin-bottom: 0;
`;

export const LayoutIcon = styled(LayoutIconSvg)`
  width: 50px;
  height: auto;
  color: #ff014f;
  stroke-width: 1 !important;
`;