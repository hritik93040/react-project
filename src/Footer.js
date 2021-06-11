import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Footer extends React.Component {
  render() {
    return (
      <>
      
      

	  <footer id="primary-footer">

	<div class="container footer-widget-area">
		<div class="row">
			<div class="col-md-4 p-3">
				<div class="footer-widget-heading">
					<h4>Fox Maya</h4>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
				<div class="footer-social-icon">
                                <div class="social-title">Follow us:</div>
                                <a href="https://www.facebook.com/foxmayaban/"><i class="fab fa-facebook-f circle-icon"></i></a>
                                <a href="https://www.instagram.com/foxmayadigital/"><i class="fab fa-instagram circle-icon"></i></a>
                                <a href="https://twitter.com/foxmayadigital"><i class="fab fa-twitter circle-icon"></i></a>
                                <a href="https://www.linkedin.com/in/ban-sharma/"><i class="fab fa-linkedin-in circle-icon"></i></a>
                            </div>
			</div>
			<div class="col-md-4 p-3">
				<div class="footer-widget-heading">
					<h4>Popular Posts</h4>
				</div>
				      <ul class="linkediting">
                        <li><a href="#"><i class="fa fa-angle-right"></i> Free Bootstrap 4 Templates</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Bootstrap Footer Templates</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Bootstrap Portfolio Themes</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Bootstrap Hero</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Bootstrap 4 Tutorial</a></li>
	                  </ul>
				</div>
			<div class="col-md-4 p-3">
				<div class="footer-widget-heading">
					<h4>Quick Links</h4>
				</div>
				<ul class="linkediting">
                        <li><a href="#"><i class="fa fa-angle-right"></i> About Us</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Contact Us</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> My Portfolio</a></li>
                        <li><a href="#"><i class="fa fa-angle-right"></i> Testimonials</a></li>
	                  </ul>
			</div>
		</div>
	</div>
	
    <hr />

	<div class="copyright-area">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="copyright-text text-left">
                            <p>Designed by <a href="https://foxmaya.com/about/">Ban Sharma</a></p>
                        </div>
				</div>
				<div class="col-md-6">
					<div class="footer-menus text-right">
						<ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
	                  </ul>
					</div>
				</div>
			</div>
		</div>
	</div>

</footer>
     
      
      
      </>
    );
  }
}
