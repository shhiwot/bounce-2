import React, { Component } from "react";
import data from "../assets/Data";
import Desplay from "./Desplay";
import "../CSS/style.css";

class DesplayCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Group 2 Bounce Practice</h1>
        </div>
        <br />
        {data.map((val, i) => {
          const className = i % 2 === 0 ? "tomato" : "silver";
          return <Desplay key={i} list={val} className={className} /> ;
        })}
      </div>
    );
  }
}

export default DesplayCard;
