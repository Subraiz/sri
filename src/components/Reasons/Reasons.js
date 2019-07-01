import React, { Component } from "react";
import "./Reasons.css";

class Reasons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reasons: [
        "Reason 1",
        "Reason 2",
        "Reason 3",
        "Reason 4",
        "Reason 5",
        "Reason 6"
      ]
    };
  }

  renderReasons() {
    return this.state.reasons.map((reason, index) => {
      return <li key={index}>{reason}</li>;
    });
  }

  render() {
    return (
      <div className="reasons-container">
        <div className="choose">
          <p>Why Choose Us?</p>
          <ol className="reasons-list">{this.renderReasons()}</ol>
        </div>
        <div className="ceo">
          <img
            src={require("../../assets/images/edgar.png")}
            alt=""
            className="ceo-image"
          />
          <div className="ceo-info">
            <p>Edgar Sanchez</p>
            <p>CEO & Founder of SRI</p>
          </div>
        </div>
        <div className="mobile-choose">
          <p>Why Choose Us?</p>
          <ol className="reasons-list">{this.renderReasons()}</ol>
        </div>
      </div>
    );
  }
}

export { Reasons };
