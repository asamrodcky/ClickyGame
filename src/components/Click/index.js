import React from "react";
import "./style.css";

function ClickCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={()=> props.clickCard(props.id)} className="character"></span>
    </div>
  );
}

export default ClickCard;
