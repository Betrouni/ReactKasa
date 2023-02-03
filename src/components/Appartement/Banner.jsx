import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const StyledBanner = styled.div`
  border-radius: 25px;
  height: 500px;
  width: 80%;
  margin: auto;
  position: relative;
  text-align: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 25px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 450px) {
    width: 95%;
    height: 250px;
  }
`;

export default function AppartementBanner(props) {
  const { logement } = props;

  function CarouselReact(props) {
    return (
      <Carousel>
        {/* {items.map((item, i) => (
          <Item key={i} item={item} />
        ))} */}
        {logement.pictures?.map((i, index) => (
          <Item key={index} item={i} />
        ))}
      </Carousel>
    );
  }
  function Item(props) {
    return (
      <StyledBanner>
        <img src={props.item} alt="description de l'appartement" />
      </StyledBanner>
    );
  }

  return (
    <div>
      {/* <StyledBanner>
        <img src={logement.cover} alt="nature img" />
      </StyledBanner> */}
      <CarouselReact />
    </div>
  );
}
