import React from "react";
import "./DestinationStyles.css";

const DestinationData = (props) => {
  return (
    <div>
      <div className={props.className}>
        <div className="des-text">
          <h1>{props.heading}</h1>
          <p>{props.text}</p>
        </div>

        <div className="image">
          <img alt="img" src={props.img1} />
          <img alt="img" src={props.img2} />
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
