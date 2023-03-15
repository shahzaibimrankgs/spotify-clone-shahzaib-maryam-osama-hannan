import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <h1 className="card-title">{props.title}</h1>
      <div className="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        <div className="card-content">
          <h4 className="card-title">{props.playlistName}</h4>
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
