import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <>
      
      



        
	<footer class="site-footer">
		<div class = "container">

			<div class="grid-container">
				<div class="grid-item">
					
					<img src = "https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/28/full/1595904030-4016.jpg " class = "logo-img"/>

				</div>

				<div class="grid-item inner-grid-container">
					
					<div class="grid-item"><a href="">About Us</a></div>   
					<div class="grid-item"><a href="">Health and Social Care</a></div>   
					<div class="grid-item"><a href="">Privacy Policy</a></div>   
					<div class="grid-item"><a href="">Blog</a></div>   
					<div class="grid-item"><a href="">Contact us</a></div>   
					<div class="grid-item"><a href="">Finance</a></div>
					<div class="grid-item"><a href="">Cookie Policy</a></div>   
					<div class="grid-item"><a href="">Jobs</a></div>   


				</div>

				<div class="grid-item">
					<div class = "social-buttons">
						<a href= ""><i class="fa fa-instagram"></i></a>
						<a href= ""><i class="fa fa-facebook"></i></a>
						<a href= ""><i class="fa fa-linkedin"></i></a>
						<a href= ""><i class="fa fa-twitter"></i></a>
					</div>
				</div>   
			</div>
			<hr />

			<p>Copyright © 2021 | Redempt Ltd | Redempt Resourcing | Redempt Health ltd All rights reserved</p>

		</div>
	</footer>
     
      
     
      
      
      </>
    );
  }
}
