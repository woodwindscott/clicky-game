// Dependencies
import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div>
        <div className="col-3-md">
          {/* Div to handle the on click - handle Select function as well as assign proper className for image shake if an incorrect guess is made. */}
          <div onClick={() => props.handleSelect(props.id)} className={(props.guess===false) ? "card img-shake" : "card"}>
              {/* Grabs the info about each card image through props */}
              <img alt={props.name} src={props.src} />
          </div>
        </div>
    </div>
  );
}

export default Card;