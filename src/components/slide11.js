import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide11 from "../static/image/Slide11.png";

export default class Slide11 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide11} class="img-responsive" />
            <div className=" box-a" style={{width : "45%"}}>
              <h1 className="grad-head-a" style={{fontSize : "9vh"}}>Big name brands are already in</h1>
            </div>
            <div className="box-a1" style={{top : "55%"}}>
              <h5 className="para-head">
              Brands that are looking to increase awareness of their products are already seeing the benefits of using NFTs to create unique consumer expiriences.
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         