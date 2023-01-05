import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImg from "../assets/Aboutus.jpeg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <Hero
        hName="hero-about"
        hImg={contactImg}
        title="Contact Us"
        btnClass="hide"
      />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
