import React, { Component } from "react";
import "./Featured.css";
import { Listing } from "../";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

class Featured extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.card = React.createRef();
    this.state = {
      selectedIndex: 0,
      scrollDistance: 0
    };
  }

  renderListings() {
    return this.props.listings.map((listing, i) => {
      return (
        <div
          className="listing-item"
          id={`listing${i}`}
          key={i}
          ref={this.card}
        >
          <Listing listing={listing} />
        </div>
      );
    });
  }

  scrollToNextItem() {
    const numberOfCardsOnScreen = Math.floor(
      window.innerWidth / this.card.current.offsetWidth
    );
    if (
      this.state.selectedIndex <
      this.props.listings.length - numberOfCardsOnScreen
    ) {
      const scrollDistance =
        this.state.scrollDistance + this.card.current.offsetWidth;
      this.container.current.scroll({
        left: scrollDistance,
        behavior: "smooth"
      });
      this.setState({
        scrollDistance: scrollDistance,
        selectedIndex: this.state.selectedIndex + 1
      });
    }
  }

  scrollToPreviousItem() {
    if (this.state.selectedIndex > 0) {
      this.container.current.scroll({
        left: this.state.scrollDistance - this.card.current.offsetWidth,
        behavior: "smooth"
      });
      this.setState({
        scrollDistance:
          this.state.scrollDistance - this.card.current.offsetWidth,
        selectedIndex: this.state.selectedIndex - 1
      });
    }
  }

  render() {
    return (
      <div>
        <div className="featured-listings-container" ref={this.container}>
          {this.renderListings()}
        </div>
        <div className="actions-container">
          <button
            onClick={this.scrollToPreviousItem.bind(this)}
            className="featured-button"
          >
            <FaAngleLeft className="action" id="backward" />
          </button>
          <button
            onClick={this.scrollToNextItem.bind(this)}
            className="featured-button"
          >
            <FaAngleRight className="action" id="forward" />
          </button>
        </div>
      </div>
    );
  }
}

export { Featured };
