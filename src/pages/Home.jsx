import React from "react";
import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import CardContainer from "../components/Home/CardContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner>
        <p>Chez vous, partout et ailleurs</p>
        <div className="filter"></div>
      </Banner>
      <CardContainer />
      <Footer />
    </div>
  );
}
