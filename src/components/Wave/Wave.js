import React, { Component } from "react";
import "./Wave.css";
import { FaArrowCircleDown } from "react-icons/fa";

class Wave extends Component {
  render() {
    return (
      <div className="wave-container">
        <div className="wave">
          <div className="mission-container">
            <p>Our Mission</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="building" />
          <FaArrowCircleDown className="arrow" />
        </div>
      </div>
    );
  }
}

export { Wave };
