import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide8 from "../static/image/Slide8.png";

export default class Slide8 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide8} class="img-responsive" />
            <div className="box6">
              <h1 className="grad-head8">Our mission is...</h1>
              
              <h5 className="para-head3">
                ...to unlock the limitless potential of NFTs for creators, collectors, businesses, bands, crypto enthusiasts, charities and anyone interested to learn about NFTs
              </h5>
              
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         