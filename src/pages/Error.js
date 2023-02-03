import React from "react";
import Header from "../components/Header";
import ErrorMessage from "../components/Error/ErrorMessage";
import Footer from "../components/Footer";


export default function Error() {
  return (
    <div>
      <Header />
        <ErrorMessage />
        <Footer />
    </div>
  );
}
