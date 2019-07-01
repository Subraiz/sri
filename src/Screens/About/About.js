import React, { Component } from "react";
import "./About.css";
import {
  Navbar,
  CompanyOverview,
  Divider,
  Reasons,
  Footer
} from "../../components";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Navbar selected={"About"} barStyle={"bar"} />
        <Divider height={"short"} />
        <div className="section1-about">
          <CompanyOverview />
          <Reasons />
        </div>
        <Footer />
      </div>
    );
  }
}

export { About };
