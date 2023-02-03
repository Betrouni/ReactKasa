import React from "react";
import styled from "styled-components";
import BannerImg from "../../assets/images/ProposBanner.png"; // with import

const StyledBanner = styled.div`
  border-radius: 25px;
  height: 25vh;
  width: 80%;
  margin: auto;
  position: relative;
  text-align: center;
  margin-bottom: 50px;


  img {
    height: 100%;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
  }

`;

export default function Banner(props) {
  return (
    <div>
      <StyledBanner>
        <img src={BannerImg} alt="nature img" />
      </StyledBanner>
    </div>
  );
}
