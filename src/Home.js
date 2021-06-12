import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://i.pinimg.com/originals/e6/90/5c/e6905c4ac56db067d3b265763af49d22.jpg"
                  alt="Los Angeles"
                  width="1100"
                  height="500"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.desktopbackground.org/download/960x544/2014/03/15/731954_abstract-elegant-flower-meaning-wallpapers-hd-hd-desktop-wallpapers_1280x720_h.jpg"
                  alt="Chicago"
                  width="1100"
                  height="500"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://wallpapercave.com/wp/wp2620447.jpg"
                  alt="New York"
                  width="1100"
                  height="500"
                />
              </div>
            </div>

            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <h1 class="about">About Green</h1>
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <img
                src="http://savetreessaveearth.com/wp-content/uploads/2015/06/tree1-1024x804.jpg"
                width="100%"
              />
            </div>
            <div class="col-sm-6">
              <h1 class="save">Together We Can Save Planet</h1>

              <p>
                There are around 400,000 plants species recorded in the world
                and many more waiting to be discovered and named. Yet although
                the threat to the existence of many wild a nimals is now widely
                recognized, not many people are aware that plants are also in
                danger. In February 2015, the Center for Biological Diversity
                stated "Of the more than 300,000 known species of plants, the
                IUCN has evaluated only 12,914 species, finding that about 68%
                of evaluated plant species are threatened with extinction."
              </p>
              <button class="button">Learn More</button>
            </div>

            <div class="container">
              <h1 class="heading">Fetured Produced</h1>
              <hr class="line" />

              <div class="row">
                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://extendednotesimages.s3.amazonaws.com/channel_images/1401/earth_day_article.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Earth</h1>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://www.crushpixel.com/big-static14/preview4/concept-nature-reserve-conserve-wildlife-1723495.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Earth</h1>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://i2-prod.leicestermercury.co.uk/special-features/article1483189.ece/ALTERNATES/s615/GettyImages-678573106.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Earth</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://gogetfunding.com/wp-content/uploads/2017/03/5171062/img/1.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Plant</h1>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://st3.depositphotos.com/1414271/16776/v/1600/depositphotos_167767766-stock-illustration-save-tree-vector-icon-logo.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Plant</h1>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="fetured">
                    <img
                      src="https://thumbs.dreamstime.com/b/save-trees-poster-poster-developed-cause-save-trees-save-tree-saves-us-thats-why-image-represents-treen-157482074.jpg"
                      width="100%"
                      height="90%"
                    />
                    <h1 class="box">Save Plant</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
