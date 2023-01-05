import React from "react";
import "./HeroStyle.css";

const Hero = (props) => {
  return (
    <div className={props.hName}>
      <img alt="heroimg" src={props.hImg} />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
