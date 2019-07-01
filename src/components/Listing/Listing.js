import React, { Component } from "react";
import "./Listing.css";
import { FaBath, FaBed, FaChartArea, FaTools } from "react-icons/fa";

class Listing extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="listing-container">
        <div className="top-container">
          <div className="image-container">
            <img
              src={this.props.listing.image}
              alt=""
              className="house-image"
            />
          </div>
          <div className="primary-container">
            <div className="photo-counter-container" />
            <div className="address-container">
              <p className="address">{this.props.listing.address}</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p className="price">{this.props.listing.price}</p>
          <div className="details">
            <div className="first-column">
              <div className="bath-container info">
                <FaBath className="icon" />
                <p>Bathrooms: {this.props.listing.bath}</p>
              </div>
              <div className="area-container info">
                <FaChartArea className="icon" />
                <p>Area: {this.props.listing.area}</p>
              </div>
            </div>
            <div className="second-column">
              <div className="bed-container info">
                <FaBed className="icon" />
                <p>Bedrooms: {this.props.listing.bed}</p>
              </div>
              <div className="year-container info">
                <FaTools className="icon" />
                <p>Year: {this.props.listing.year}</p>
              </div>
            </div>
          </div>
          <div className="view-more">
            <button>View More</button>
          </div>
        </div>
      </div>
    );
  }
}

export { Listing };
