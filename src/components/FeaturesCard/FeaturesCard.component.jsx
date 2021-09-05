import React from "react";
import {
  FeaturesCardWrapper,
  FeaturesCard,
  FeaturesIcon,
  FeaturesContent,
  FeaturesCardTitle,
  FeaturesCardDescription,
  FeaturesReadMoreButton,
  RightArrowIcon,
} from "./FeaturesCard.styles";

const FeaturesCardComponent = ({ title, children, icon }) => {
  return (
    <FeaturesCardWrapper>
      <FeaturesCard>
        <FeaturesIcon>{icon}</FeaturesIcon>
        <FeaturesContent>
          <FeaturesCardTitle>{title}</FeaturesCardTitle>
          <FeaturesCardDescription>{children}</FeaturesCardDescription>
          <FeaturesReadMoreButton>
            <RightArrowIcon />
          </FeaturesReadMoreButton>
        </FeaturesContent>
      </FeaturesCard>
    </FeaturesCardWrapper>
  );
};

export default FeaturesCardComponent;
