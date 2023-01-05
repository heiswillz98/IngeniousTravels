import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import Timg from "../assets/travel3.jpeg";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        hName="hero"
        hImg={Timg}
        text="Choose your favorite destination, let's bring your journey alive"
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />

      <Trip />

      <Footer />
    </div>
  );
};

export default Home;
