import logo from "./logo.svg";
import React from "react";
import Home from "./Home"; 

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {
 
  render() {
    return (
      <>
        <Router>
          <div>
            <Switch>
            <Route exact path="/home" component={Home} />
            
              <Route exact path="*" component={Home} />
            
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
export default App;
