import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <>
      <nav>
          
          
          <ul>
          <li class="logo"><a href="cascase">CASCASE</a></li> 
          <li><a href="contact">Contact</a></li>
          <li><a href="about">About us</a></li>
          <li><a href="galary">Galary</a></li>
          <li><a href="service">Service</a></li>
          <li><a href="home">Home</a></li>
          </ul>

      
  </nav>
     
    



          </>
    );
  }
}
