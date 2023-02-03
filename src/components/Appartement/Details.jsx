import React from "react";
import Accordion from "./Accordion";
import styled from "styled-components";

const DetailContainer = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  height: 20vh;
`;

export default function Details(props) {
  const [equipement, setEquipement] = React.useState();

  const { logement } = props;

  React.useEffect(() => {
    if (logement.hasOwnProperty("equipments")) {
      // console.log(logement.equipments);
      setEquipement(logement.equipments);
    }
  }, [logement]);

  return (
    <div>
      <Accordion title={"Description"} description={logement.description} />
      {logement.equipments ? (
        <Accordion title={"Équipement"} content={equipement} />
      ) : (
        console.log("equipments loading")
      )}
    </div>
  );
}
