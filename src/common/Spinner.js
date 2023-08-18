import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div>
      <section>
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="hand">
            <span></span>
            <div className="face"></div>
            <div className="cowl"></div>
          </div>
        </div>
        <div className="speed">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* I may want to add a cool loading message here */}
      </section>
    </div>
  );
}

export default Spinner;
