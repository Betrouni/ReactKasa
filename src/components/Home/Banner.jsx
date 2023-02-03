import React from "react";
import styled from "styled-components";
import BannerImg from "../../assets/images/Banner-img.png"; // with import

const StyledBanner = styled.div`
  border-radius: 25px;
  height: 30vh;
  width: 80%;
  margin: auto;
  position: relative;
  text-align: center;
  font-size: 48px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
  }
  .filter {
    background-color: black;
    opacity: 0.3;
    height: 100%;
    width: 100%;
    border-radius: 25px;
    position: absolute;
    top: 0px;
    mix-blend-mode: darken;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    color: white;
    z-index: 2;
    width: 100%;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }

  @media (max-width: 450px) {
    font-size: 35px;
    height: 15vh;
    width: 90%;
    border-radius: 5px;
    img {

    border-radius: 5px;
    
  }
  .filter {
    border-radius: 5px;
  }
  }
`;

export default function Banner(props) {
  return (
    <div>
      <StyledBanner>
        <img src={BannerImg} alt="nature img" />
        <p>Chez vous, partout et ailleurs</p>
        <div className="filter"></div>
      </StyledBanner>
    </div>
  );
}
