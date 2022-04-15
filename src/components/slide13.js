import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide13 from "../static/image/Slide13.png";

export default class Slide13 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide13} class="img-responsive" />
            <div className="box-right">
              <h1 className="long-head">WE MAKE NFTs FUN, EASY TO CREATE AND EASY TO USE FOR EVERYONE</h1>
              <h3 className="right-head">MeDia eYe is a plateform that services both the novice and the experienced, using advanced BaaS applications to create unprecidented functionality, making it easy to discover and use NFTs</h3>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         