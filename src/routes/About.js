import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/Aboutus.jpeg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
  return (
    <div>
      <Navbar />

      <Hero
        hName="hero-about"
        hImg={AboutImg}
        title="About Us"
        btnClass="hide"
      />

      <AboutUs />

      <Footer />
    </div>
  );
};

export default About;
