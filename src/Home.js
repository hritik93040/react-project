import React from "react";
import "./App.css";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <>
      
      <Header />
      
        <img class="images" src="https://wallpaperaccess.com/full/223267.jpg"></img>



        
	
     
      
           <Footer />

      
      </>
    );
  }
}
