import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide16a from "../static/image/Binance-Icon-Logo.wine.svg";
import slide16b from "../static/image/ethereum-icon.png";
import slide16c from "../static/image/wFTM.svg";

export default class Slide16 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container2">
          <div className="Gridbox-outer">
            <div className="grad-vbar"></div>
            <ScrollAnimation
              animateIn="zoomIn"
              animateOut="fadeOut"
              duration={1.2}
              I
            >
              <div className="center-head">
                <h1 className="white-head1">Please select a network and</h1>
                <h1 className="grad-head-b">Connect your wallet</h1>
              </div>
            </ScrollAnimation>
          </div>
          <div className="flexbox-inner">
          <ScrollAnimation 
              animateIn="fadeInRight"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="center-box">
                <div className="center-box-inner center-box-inner-a">
                  <img src={slide16a} />
                  <div className="white-bar"></div>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation 
              animateIn="zoomIn"
              animateOut="fadeOut"
              duration={1.2}
              delay={0.5}
            >
              <div className="center-box">
                
                <div className="center-box-inner center-box-inner-a">
                  <img src={slide16b} />
                  <div className="white-bar"></div>
                </div>
                
              </div>
            </ScrollAnimation>
            <ScrollAnimation 
              animateIn="fadeInLeft"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="center-box">
                <div className="center-box-inner center-box-inner-a">
                  <img src={slide16c} />
                  <div className="white-bar"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>  
      </div>
    );
  }
}         