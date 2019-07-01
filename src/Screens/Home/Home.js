import React, { Component } from "react";
import "./Home.css";
import {
  Navbar,
  Wave,
  Slogan,
  Footer,
  Testimonial,
  Featured
} from "../../components";
import data from "../../constants/data";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navbar selected={"Home"} barStyle={"main"} />
        <div className="section1">
          <Slogan />
          <Wave />
        </div>
        <div className="section2">
          <div className="featured-header">
            <div className="line" />
            <p>Featured Listings</p>
            <div className="line" />
          </div>
          <Featured listings={data} />
        </div>
        <div className="section3">
          <Testimonial />
        </div>
        <Footer />
      </div>
    );
  }
}

export { Home };
