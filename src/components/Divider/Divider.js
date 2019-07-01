import React, { Component } from "react";
import "./Divider.css";

class Divider extends Component {
  constructor(props) {
    super(props);
    this.divider = React.createRef();
  }

  componentDidMount() {
    if (this.props.height === "short") {
      this.divider.current.style.height = "10vh";
    }
  }

  render() {
    return <div className="navbarDivider" ref={this.divider} />;
  }
}

export { Divider };
