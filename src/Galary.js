import React from "react";
import "./App.css";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Galary extends React.Component {
  render() {
    return (
      <>
      
      <Header />
      
        <h1>This is Galary Page</h1>


        
	
     
      
        <Footer />

      
      </>
    );
  }
}