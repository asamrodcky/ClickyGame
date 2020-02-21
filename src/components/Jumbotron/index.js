import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Character Click Game</h1>
            <p className="lead">
            How good is your memory? Try not to click the same image twice! Good Luck :)
            </p>
        </div>
    )
};

export default Jumbotron;