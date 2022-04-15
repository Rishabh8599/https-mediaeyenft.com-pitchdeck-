import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide22 from "../static/image/Slide22.png";

export default class Slide22 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide22} class="img-responsive" />
            <div className="box box3" />
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         