import styled
 from "styled-components";
export const PortfolioCard = styled.div`
  text-align: left;
  padding: 30px;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
  z-index: 1;
  height: 100%;
  transition: 0.5s all ease-in-out;
  display: inline-block;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    transition: 0.4s;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: linear-gradient(to right bottom, #212428, #16181c);
    opacity: 0;
    z-index: -1;
  }

  img {
    width: 100%;
    transition: 0.4s;
    height: auto;
    object-fit: cover;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const PortfolioCardWrapper = styled.div`
  margin-top: 50px;
`;

export const PortfolioThumbnail = styled.div`
  display: block;
  overflow: hidden;
  border-radius: 10px;

  & > img {
    width: 100%;
  }
`;

export const PortfolioContent = styled.div`
  padding-top: 18px;
`;

export const PortfolioContentCategory = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const PortfolioContentCategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const PortfolioCategory = styled.span`
  color: #ff014f;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: block;
`;

export const PortfolioContentTitle = styled.h4`
  transition: 0.4s;
  color: #c4cfde;
  font-weight: 600;
  font-size: 23px;
  line-height: 34px;
  display: inline-block;
`;
