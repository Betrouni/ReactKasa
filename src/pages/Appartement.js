import React from "react";
import Header from "../components/Header";
import Details from "../components/Appartement/Details";
import AppartementBanner from "../components/Appartement/Banner";
import Description from "../components/Appartement/Description";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Appartement() {
 const { id } = useParams();
  const [LogementData, setLogementData] = React.useState([]);

  React.useEffect(() => { 
    
    axios.get("../data/appartements.json").then((res) => {
      setLogementData(res.data.find((value) => value.id === id));
    });
  }, [id]);

  return (
    <div>
      <Header />
      <AppartementBanner logement={LogementData}/>
      <Description logement={LogementData} />
      <Details logement={LogementData} />
      <Footer />
    </div>
  );
}
