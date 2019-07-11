import React, { Component } from "react";
import { Home, About, Listings, Contact } from "./Screens";
import { Route, BrowserRouter as Router } from "react-router-dom";
import firebase from "firebase/app";
import "./App.css";

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAApyyCpNNZkoTmoFTyZ6n2Mqt9dcMHx4M",
      authDomain: "sanchezri.firebaseapp.com",
      databaseURL: "https://sanchezri.firebaseio.com",
      projectId: "sanchezri",
      storageBucket: "sanchezri.appspot.com",
      messagingSenderId: "382928925541",
      appId: "1:382928925541:web:b772d0b5b1e8f934"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/listings" component={Listings} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
