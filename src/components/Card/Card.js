import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div>
        <div className="col-3-md">
            <div onClick={() => props.handleSelect(props.id)} className={(props.guess===false) ? "card img-shake" : "card"}>
                <img alt={props.name} src={props.src} />
            </div>
        </div>
    </div>
  );
}

export default Card;