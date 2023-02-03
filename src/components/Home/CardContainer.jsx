import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";

const StyledBackground = styled.div`
  width: 80vw;
  min-height: 400px;
  border-radius: 25px;
  background-color: lightgrey;
  display: flex;
  margin: auto;
  margin-top: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 50px;
  @media (max-width: 450px) {
   background-color: #fff;
   
 }
`;

export default function CardContainer() {
  const [LogementsData, setLogementsData] = React.useState([]);


  React.useEffect(() => {
    axios.get("./data/appartements.json").then((res) => {
      setLogementsData(res.data);
    });
  }, []);

  return (
    <StyledBackground>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {LogementsData.map((logement) => {
        return <Card key={logement.id} logement={logement} />;
      })}
    </StyledBackground>
  );
}
