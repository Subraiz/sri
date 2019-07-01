import React, { Component } from "react";
import "./Slogan.css";

class Slogan extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      speed: 150,
      position: 0,
      value: "Real Estate"
    };
  }

  componentDidMount() {
    let input = this.input.current;
    let string = input.innerText;
    input.innerText = "";
    setTimeout(() => {
      this.type(input, string);
    }, 100);
  }

  type = (input, string) => {
    let { position, speed } = this.state;
    if (position < string.length) {
      input.innerHTML += string.charAt(position);
      this.setState({ position: this.state.position + 1 });
      setTimeout(() => {
        this.type(input, string);
      }, speed);
    } else {
      setTimeout(() => {
        this.erase(input, string);
      }, 1000);
    }
  };

  erase = (input, string) => {
    let { position, speed } = this.state;
    if (position >= 0) {
      input.innerHTML = string.substring(0, position);
      this.setState({ position: this.state.position - 1 });
      setTimeout(() => {
        this.erase(input, string);
      }, speed);
    } else {
      if (this.state.value === "Investing") {
        setTimeout(() => {
          this.type(input, "Real Estate");
        }, 500);
        this.setState({ value: "Real Estate" });
      } else {
        setTimeout(() => {
          this.type(input, "Investing");
        }, 500);
        this.setState({ value: "Investing" });
      }
    }
  };

  render() {
    return (
      <div className="slogan-container">
        <p className="text input" ref={this.input}>
          Real Estate
        </p>
        <span className="type-cursor">|</span>
        <p>&nbsp;&nbsp;Made Simple</p>
      </div>
    );
  }
}

export { Slogan };
