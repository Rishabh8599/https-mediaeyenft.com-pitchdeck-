import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide7 from "../static/image/Slide7.png";

export default class Slide7 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide7} class="img-responsive" />
            <div className="box2">
              <h1 className="grad-head">Gamified NFTs</h1>
              
              <h5 className="para-head">
                The digital nature of NFTs has resulted in some exiting new developments. Gaming mixed with DeFi is delivering amazing traction for gaming and digital experiences. NFTs stand at the forefront of these exciting new markets.
              </h5>
              
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         