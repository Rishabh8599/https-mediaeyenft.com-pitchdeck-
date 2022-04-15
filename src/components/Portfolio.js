import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide2 from "../static/image/Slide2.png";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio__container">
        

        <div className="Portfolio__row row__2">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide2} class="img-responsive" />
            <div className="box2">
              
              <h1 className="grad-head">What is an NFT</h1>
              
              <h5 className="para-head">
                A non-fungible Cyptographic Unit, also a unique token, is a type of cryptographic token, each instance of which is unique and cannot be exchanged or replaced with another token
              </h5>
            </div>
          </ScrollAnimation>
        </div>

        
            
        
      </div>
    );
  }
}
