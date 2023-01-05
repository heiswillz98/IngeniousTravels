import React from "react";
import Paris1 from "../assets/3.jpg";
import Paris2 from "../assets/paris.jpeg";
import Statue1 from "../assets/lib.jpeg";
import Statue2 from "../assets/lib2.jpeg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you oportunity to explore the world </p>

      <DestinationData
        className="des-first"
        heading="Eiffel Tower, France 🇫🇷"
        text="The Eiffel Tower is a wrought iron tower that stands
         1,063 ft (324 m) tall. It was designed for the Exposition Universelle, 
         a world fair held in Paris in 1889. It is currently the most famous symbol of Paris.
         A must-see for everyone who visits Paris, a little over 6 million people climb the Eiffel Tower every year. 
         The Eiffel Tower is open every day, and even at night, from 9:30 am to 11:45 pm,
          and in summer from 9:00 am to 12:45 am. "
        img1={Paris2}
        img2={Paris1}
      />
      <DestinationData
        className="des-first-reverse"
        heading="Statue Of Liberty, USA 🇺🇸 "
        text="The Statue of Liberty is a 305-foot (93-metre) statue located on Liberty Island in Upper New York Bay, 
        off the coast of New York City. The statue is a personification of liberty in the form of a woman.
         She holds a torch in her raised right hand and clutches a tablet in her left."
        img1={Statue1}
        img2={Statue2}
      />
    </div>
  );
};

export default Destination;
