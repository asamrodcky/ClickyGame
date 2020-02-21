import React from "react";
// import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/">Clicky Game</a>
                </li>
                <li className="nav-item">{props.displayMessage}</li>
                <li className="nav-item">
                    Score:
                    <span className="score">{props.score}</span>
                    | Top Score:
                    <span className="highScore">{props.highScore}</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
