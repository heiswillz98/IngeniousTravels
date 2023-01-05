import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assets/service.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <div>
      <Navbar />

      <Hero
        hName="hero-about"
        hImg={ServiceImg}
        title="Our Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;
