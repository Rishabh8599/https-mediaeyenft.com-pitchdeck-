// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide1 from "../static/image/Slide1.png";
import slide1a from "../static/image/big_main_logo.png";
import "../style/animate.css";

export default class Homepage extends Component {
  render() {
    return (
      
        <div className="Homepage__container slide-container">
          <div className="container" style={{minHeight: "100vh"}}>
            <div className="lower-container">
              <ScrollAnimation
                animateIn="fadeInLeft"
                animateOut="fadeOut"
                duration={0.5}
                delay={0}
                animateOnce="true"
              >
                <img src={slide1a} className="logo_image" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeOut"
                duration={0.5}
                delay={0}
                animateOnce="true"
              >
                <div className="box">

                  <h3 className="animate__zoomIn animate__delay-0.5s">We put the power of blockchain to work for you</h3>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      
    );
  }
}
