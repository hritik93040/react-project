import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Contact extends React.Component {
  render() {
    return (
      <>
        <Header />

        <div class="container-flud">
          <div class="row">
            <div class="col-sm-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57563.49977661977!2d85.0696125057291!3d25.614260875414686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585d6f2b09b1%3A0x5d7e42cb10e5c324!2z4KST4KSv4KWLIOCkq-CljeCksuCliOCkl-CktuCkv-CkqiAzMDg5MyDgpLngpYvgpJ_gpLIg4KSs4KWC4KSs4KWN4KS4!5e0!3m2!1shi!2sin!4v1623649397035!5m2!1shi!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="name">
                <h1 class="isu">Contact Info</h1>
                <hr class="line3"></hr>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="ram2">
              <h4 class="ram">Send a Message</h4>
              
                <form action="/action_page.php">
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                  <label htmlFor="country">Country</label>
                  <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">India</option>
                    <option value="usa">USA</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "200px" }}
                    defaultValue={""}
                  />
                  <input type="submit" defaultValue="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
