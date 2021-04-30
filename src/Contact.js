import React from "react";
import "./App.css";
import Header from "./Header"
import Footer from "./Footer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Contact extends React.Component {
  render() {
    return (
      <>
      
      <Header />
      
        
        <div class="login-box">
            <h1>Login</h1>
            <div class="textbox">
                <input type="text" placeholder="Username" name="" value=""></input> <br /> <br />
            </div>


            <div class="textbox">
                <input type="password" placeholder="Password" name="" value=""></input> <br /> <br />
            </div>

            <input class="btn" type="button" name="" value="Sign in"></input>

        </div>


        
	
     
      
           <Footer />

      
      </>
    );
  }
}