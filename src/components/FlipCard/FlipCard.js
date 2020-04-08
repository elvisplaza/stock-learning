import React from "react";
import s from "./FlipCard.css";

const FlipCard = ({ front, back, title }) => {
  return (
    <div class='flip-card'>
      <div class='flip-card-inner'>
        <div class='flip-card-front'>
          <img src={front} />
        </div>
        <div class='flip-card-back'>
          <h2>{title}</h2>
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
