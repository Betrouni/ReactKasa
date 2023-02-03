import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHeader = styled.div`
  height: 15vh;
  width: 80%;
  margin: auto;

  .header {
    font-family: "Montserrat";
    display: flex;
    justify-content: space-between;
    margin: 20px;
    font-size: 200%;
    text-align: center;
    
    margin: auto;
  }
  p {
    padding: 15px;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    display: flex;

    color: #ff6060;
  }
  .left-header {
    padding-top: 20px;
    margin-left: 40px;
    size: 110%;
    display: flex;
    justify-content: flex-start;
    width: 50%;
  }
  .right-header {
    display: flex;
    width: 50%;
    justify-content: center;
    p {
      margin-right: 25px;
      height: 50px;
      text-align: center;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    p {
      font-size: 16px;
    }
    .left-header {
      size: 50%;
    }
  }
  @media (max-width: 360px) {
   

    p {
      font-size: 8px;
    }
    
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className="header">
        <div className="left-header">
          <Logo  />
        </div>
        <div className="right-header">
          <StyledLink to="/Home">
            <p>Accueil</p>
          </StyledLink>
          <StyledLink to="/APropos">
            <p>À Propos</p>
          </StyledLink>
        </div>
      </div>
    </StyledHeader>
  );
}
