import React, { Component } from "react";
import "./Listings.css";
import { Navbar, Divider, Listing, Footer } from "../../components";
import data from "../../constants/data";

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: data
    };
  }

  renderListings() {
    return this.state.listings.map((listing, index) => {
      return (
        <div className="top-listings-listing" key={index}>
          <Listing listing={listing} />
        </div>
      );
    });
  }

  render() {
    return (
      <div className="listings">
        <Navbar barStyle={"bar"} selected={"Listings"} />
        <Divider height={"short"} />
        <div className="listings-header-image" />
        <div className="top-listings-header">
          <div className="line" />
          <p>View Some of Our Top Listings</p>
          <div className="line" />
        </div>
        <div className="top-listings-container">{this.renderListings()}</div>
        <Footer />
      </div>
    );
  }
}

export { Listings };
