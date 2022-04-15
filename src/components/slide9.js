import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide9 from "../static/image/Slide9.png";

export default class Slide9 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide9} class="img-responsive" />
            <div className="box box-top">
              <h3 className="top-head">...we cater to diverse range of brands & customized content</h3>
              <h5 className="para-head">
                MeDIA eYe platform is designed to support a wide range of users, such as; creators, collectors, markets, crypto enthusiasts, protocols, businesses, charities, gamers and anyone wanting to use NFTs
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         