import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide4 from "../static/image/Slide4.png";

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
            <img src={slide4} class="img-responsive" />
            <div className="box4">
              <h1 className="grad-head1">What is</h1>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         