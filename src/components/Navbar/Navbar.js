import React, { Component } from "react";
import "./Navbar.css";
import "../../dist/hamburgers.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navDrawer = React.createRef();
    this.navItems = React.createRef();
    this.desktopNavbar = React.createRef();
    this.hamburger = React.createRef();
    this.state = {
      openNavDrawer: false
    };
  }

  componentDidMount() {}

  openNavDrawer() {
    this.state.openNavDrawer = !this.state.openNavDrawer;
    if (this.state.openNavDrawer) {
      this.navDrawer.current.classList.remove("hide");
      setTimeout(() => {
        this.navDrawer.current.style.maxWidth = "60vw";
        this.navItems.current.style.display = "block";
        this.hamburger.current.classList.add("is-active");
      }, 100);
    } else {
      this.navDrawer.current.style.maxWidth = "0";
      this.hamburger.current.classList.remove("is-active");
      setTimeout(() => {
        this.navDrawer.current.classList.add("hide");
      }, 700);
    }
  }

  render() {
    if (this.props.barStyle === "bar") {
      return (
        <div className="container">
          <div className="bar-container">
            <div className="bar-navbar-container">
              <img src={require("../../assets/images/SRILogo.png")} alt="" />
              <ul className="navbar">
                <li className="bar-navbar-item">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <button
                      id={this.props.selected === "Home" ? "bar-selected" : ""}
                      className="bar-navbar-button"
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li className="bar-navbar-item">
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <button
                      className="bar-navbar-button"
                      id={this.props.selected === "About" ? "bar-selected" : ""}
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li className="bar-navbar-item">
                  <Link to="/listings" style={{ textDecoration: "none" }}>
                    <button
                      className="bar-navbar-button"
                      id={
                        this.props.selected === "Listings" ? "bar-selected" : ""
                      }
                    >
                      Listings
                    </button>
                  </Link>
                </li>
                <li className="bar-navbar-item">
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <button
                      className="bar-navbar-button"
                      id={
                        this.props.selected === "Contact" ? "bar-selected" : ""
                      }
                    >
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-navbar-container">
            <div className="mobile-navbar-header">
              <button
                className="hamburger hamburger--collapse "
                type="button"
                id="nav-button-icon"
                ref={this.hamburger}
                onClick={this.openNavDrawer.bind(this)}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <img
                src={require("../../assets/images/SRILogo.png")}
                alt=""
                id="mobile-logo"
              />
            </div>
            <div className="mobile-navbar-drawer hide" ref={this.navDrawer}>
              <ul className="mobile-navbar" ref={this.navItems}>
                <li className="navbar-item-drawer">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Home" ? "selected" : ""}
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "About" ? "selected" : ""}
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/listings" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Listings" ? "selected" : ""}
                    >
                      Listings
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Contact" ? "selected" : ""}
                    >
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="navbar-container" ref={this.desktopNavbar}>
            {/* Desktop Navbar */}
            <ul className="navbar">
              <li className="navbar-item">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar-button"
                    id={this.props.selected === "Home" ? "selected" : ""}
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar-button"
                    id={this.props.selected === "About" ? "selected" : ""}
                  >
                    About
                  </button>
                </Link>
              </li>
            </ul>
            <ul className="navbar">
              <li className="navbar-item">
                <img
                  src={require("../../assets/images/SRILogo.png")}
                  id="logo"
                  alt=""
                  width="150"
                />
              </li>
            </ul>
            <ul className="navbar">
              <li className="navbar-item">
                <Link to="/listings" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar-button"
                    id={this.props.selected === "Listings" ? "selected" : ""}
                  >
                    Listings
                  </button>
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar-button"
                    id={this.props.selected === "Contact" ? "selected" : ""}
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Navbar */}
          <div className="mobile-navbar-container">
            <div className="mobile-navbar-header">
              <button
                className="hamburger hamburger--collapse "
                type="button"
                id="nav-button-icon"
                ref={this.hamburger}
                onClick={this.openNavDrawer.bind(this)}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              <img
                src={require("../../assets/images/SRILogo.png")}
                alt=""
                id="mobile-logo"
              />
            </div>
            <div className="mobile-navbar-drawer hide" ref={this.navDrawer}>
              <ul className="mobile-navbar" ref={this.navItems}>
                <li className="navbar-item-drawer">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Home" ? "selected" : ""}
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "About" ? "selected" : ""}
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/listings" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Listings" ? "selected" : ""}
                    >
                      Listings
                    </button>
                  </Link>
                </li>
                <li className="navbar-item-drawer">
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    <button
                      className="navbar-button"
                      id={this.props.selected === "Contact" ? "selected" : ""}
                    >
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

export { Navbar };
