import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide10 from "../static/image/Slide10.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide10} class="img-responsive" />
            <div className=" box-a">
              <h1 className="grad-head-a">Brands are beginning to adapt</h1>
            </div>
            <div className="box-a1">
              <h5 className="para-head">
              Artists, businesses and brands need to adapt and upgrade to the bew digital reality.
              </h5>
              <h5 className="para-head">                    
              Creators, users and businesses alike, using NFTs can thrive in a novel digital economy.
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         