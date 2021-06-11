import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <>
      <nav class="navbar navbar-expand-md" style={{backgroundColor:'white'}}>
  <a class="navbar-brand" href="#">Green</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Galary</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Service</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>

        
      </li>    
    </ul>
  </div>  
</nav>
    



          </>
    );
  }
}
