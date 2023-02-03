import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  background-color: coral;
  margin-top: 50px;
  border: solid 1px black;
  position: relative;
  margin: 15px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;

    object-fit: cover;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: linear-gradient(to bottom, transparent 0%, black 300%);
  }

  p {
    position: absolute;
    bottom: 0px;
    left: 15px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: white;
    z-index: 2;
    text-decoration: none;
    color: white;
    padding-bottom: 5px;
  }
  @media (max-width: 855px) {
   

   width: 80vw;

  
}

`;

export default function Card(props) { 
  const {logement} = props;
  return (
   

    <Link to={'/appartement/' + logement.id} >
    <StyledCard >
      <img
        // src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg"
        src={logement.cover}
        alt="pièce de l'appartement"
      />
      <p>{logement.title}</p>
    </StyledCard>
 </Link>
  );
}
