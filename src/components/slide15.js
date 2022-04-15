import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide15 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container1">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
          >
            <div className="double-head">
              <h1>NFT MARKENPLACE</h1>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         