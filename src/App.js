import logo from "./logo.svg";
import React from "react";
import Home from "./Home"; 


import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./Service";
import Galary from "./Galary";
import About from "./About";
import Contact from "./Contact";



class App extends React.Component {
 
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/galary" component={Galary} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
           
            
                             
            
              <Route exact path="*" component={Home} />
            
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
