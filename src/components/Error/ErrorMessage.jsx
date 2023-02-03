import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Error = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  color: #ff6060;
  text-align: center;

  .error-code {
    font-weight: 700;
    font-size: 288px;
  }
  .error-p {
    font-weight: bold;
    font-size: 36px;
    margin-bottom: 250px;
  }
  .error-link {
    font-weight: 500;
    font-size: 18px;
    text-decoration: underline;
    color: #ff6060;
  }
  @media (max-width: 768px) {
    .error-code {
      font-size: 96px;
    }
    .error-p {
      font-size: 18px;
      margin-bottom: 50px;
    }
    .error-link {
      font-size: 14px;
    }
  }
`;

export default function ErrorMessage() {
  return (
    <Error>
      <div className="error-code">404</div>
      <p className="error-p">Oups! La page que vous demadez n'existe pas</p>
      <StyledLink to="/Home">
        <p className="error-link">Retourner sur la page d'accueil</p>
      </StyledLink>
    </Error>
  );
}
