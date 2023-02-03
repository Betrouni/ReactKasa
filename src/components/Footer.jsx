import React from "react";
import Logo from "../assets/images/LOGO.png";
import styled from "styled-components";

const StyledFooter = styled.div`
  height: 200px;
  width: 100%;
  background-color: black;
  text-align: center;
  margin-top: 10vh;
  img {
    margin-top: 40px;
  }
  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: white;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <img src={Logo} alt="logo de Kasa"></img>
      <p>© 2020 Kasa All rights reserved</p>
    </StyledFooter>
  );
}
