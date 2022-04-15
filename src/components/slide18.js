import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide18 from "../static/image/Slide18.png";

export default class Slide18 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide18} class="img-responsive" />
            <div className="box box3" />
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         