import React, { Component } from "react";
import "./Contact.css";
import { Navbar, Divider, Footer } from "../../components";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar barStyle={"bar"} selected={"Contact"} />
        <Divider height={"short"} />
        <div className="contact">
          <div className="form">
            <div className="form-header">
              <p>Contact Us</p>
              <p>Feel free to drop us a line below!</p>
            </div>
            <div className="form-info name">
              <div className="form-input">
                <p>Full Name:</p>
                <input placeholder="Enter a full name" />
              </div>
              <div className="form-input email">
                <p>Email Address:</p>
                <input placeholder="Enter an email address" />
              </div>
              <div className="form-input phone">
                <p>Phone:</p>
                <input placeholder="Enter a phone number" />
              </div>
              <div className="form-input message">
                <p>Message:</p>
                <input placeholder="Your message..." />
              </div>
            </div>
            <div className="contact-button">
              <button>Get In Touch</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export { Contact };
