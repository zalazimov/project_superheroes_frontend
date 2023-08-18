import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div>
      <body>
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="hand">
            <span></span>
            <div class="face"></div>
            <div class="cowl"></div>
          </div>
        </div>
        <div className="speed">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* I may want to add a cool loading message here */}
      </body>
    </div>
  );
}

export default Spinner;
