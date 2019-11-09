import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Clicky Game</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>Click an image to begin!</h1>
                    </div>
                    <div className="col-md-4">
                        <h1>Score: 0 | Top Score: 0</h1>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;