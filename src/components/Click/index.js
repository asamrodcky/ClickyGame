import React from "react";
import "./style.css";

const ClickCard = props => (
    <div className="card">
      <div className="img-container">
            <img className="character" alt={props.name} src={props.image} onClick = {() => props.clickCard(props.id)}/>
      </div>
    </div>
)

export default ClickCard;
