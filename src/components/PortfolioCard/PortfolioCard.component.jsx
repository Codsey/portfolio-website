import React from "react";
import {
  PortfolioCardWrapper,
  PortfolioCard,
  PortfolioThumbnail,
  PortfolioContent,
  PortfolioContentCategory,
  PortfolioContentCategoryList,
  PortfolioCategory,
  PortfolioContentTitle,
} from "./PortfolioCard.styles";

const PortfolioCardComponent = ({ category, title, imageUrl }) => {
  return (
    <PortfolioCardWrapper>
      <PortfolioCard>
        <div className="inner">
          <PortfolioThumbnail>
            <img src={imageUrl} alt="coming soon" />
          </PortfolioThumbnail>
          <PortfolioContent>
            <PortfolioContentCategory>
              <PortfolioContentCategoryList>
                <PortfolioCategory>{category}</PortfolioCategory>
              </PortfolioContentCategoryList>
            </PortfolioContentCategory>
            <PortfolioContentTitle>{title}</PortfolioContentTitle>
          </PortfolioContent>
        </div>
      </PortfolioCard>
    </PortfolioCardWrapper>
  );
};

export default PortfolioCardComponent;
