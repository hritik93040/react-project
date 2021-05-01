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
  <div className="container-fluid">
        <div className="row">
     
      <div id="demo" class="carousel slide" data-ride="carousel">


<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://wallpapercave.com/wp/wp2634222.jpg" alt="Los Angeles" width="100%" height="600" />
  </div>
  <div class="carousel-item">
    <img src="https://www.meissl.com/media/images/8f24db1f/schweiz.jpg" alt="Chicago" width="100%" height="600" />
  </div>
  <div class="carousel-item">
    <img src="https://www.meissl.com/media/images/8f24db1f/schweiz.jpg" alt="New York" width="100%" height="600" />
  </div>
</div>

<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
</div></div>
        
    

        
	
     
      
           <Footer />

      
      </>
    );
  }
}
