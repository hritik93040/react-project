import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <>
      <nav>
          <div class="logo">CASCASE</div>
          <div class="menu">
              <ul>
              <li><a href="home">Home</a></li>
              <li><a href="service">Service</a></li>
              <li><a href="galary">Galary</a></li>
              <li><a href="about us">About us</a></li>
              <li><a href="contact">Contact</a></li>
              </ul>

          </div>
      </nav>
     
    



          </>
    );
  }
}
