import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer-address">
          <p>
            2000 Commonwealth Ave. Brighton, MA 02135 | 862-273-2073 |{" "}
            <span>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <button className="footer-button">
                  <p>Contact Us</p>
                </button>
              </Link>
            </span>
          </p>
          <div />
        </div>
        <div className="footer-address-mobile">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button className="footer-button">
              <p>Contact Us</p>
            </button>
          </Link>

          <p>862-273-2073</p>
          <p>2000 Commonwealth Ave. Brighton, MA, 02135</p>
          <div />
        </div>
        <div className="footer-content">
          <div className="footer-social">
            <div className="social-media">
              <button className="footer-button social">
                <FaFacebook className="social-icon" />
              </button>
              <button className="footer-button social">
                <FaLinkedin className="social-icon" />
              </button>
              <button className="footer-button social">
                <FaInstagram className="social-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Footer };
