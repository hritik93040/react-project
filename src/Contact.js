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

        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    frameBorder={0}
                  />
                  <a href="https://www.fridaynightfunkin.net/">
                    Friday Night Funkin
                  </a>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
