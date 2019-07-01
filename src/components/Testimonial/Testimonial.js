import React, { Component } from "react";
import "./Testimonial.css";

class Testimonial extends Component {
  render() {
    return (
      <div className="testimonial-container">
        <div className="testimonial-message-container">
          <div className="testimonial-message-header">
            <p>Buy or Sell With Us</p>
            <div className="testimonial-line" />
          </div>
          <p className="testimonial-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="house-vector-container" />
      </div>
    );
  }
}

export { Testimonial };
