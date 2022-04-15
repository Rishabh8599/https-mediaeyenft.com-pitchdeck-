import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide14a from "../static/image/Slide14-a.png";
import slide14b from "../static/image/Slide14-b.png";
import slide14c from "../static/image/Slide14-c.png";
import slide14d from "../static/image/Slide14-d.png";
import slide14e from "../static/image/Slide14-e.png";
import slide14f from "../static/image/Slide14-f.png";

export default class Slide14 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            I
          >
            <div className="service-title">
              <h1>BESPOKE NFT SERVICES</h1>
            </div>
          </ScrollAnimation>
          <div className="flexbox-inner">
            <ScrollAnimation 
              animateIn="fadeInRight"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="center-box">
                <div className="center-box-inner">
                  <img src={slide14a} />
                  <h3>MeDIA eYe HUB</h3>
                </div>
                <div className="center-box-inner">
                  <img src={slide14d} />
                  <h3>NFT Marketplace</h3>
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
                <div className="center-box-inner">
                  <img src={slide14b} />
                  <h3>Collections</h3>
                </div>
                <div className="center-box-inner">
                  <img src={slide14e} />
                  <h3>Event Gallery</h3>
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
                <div className="center-box-inner">
                  <img src={slide14c} />
                  <h3>Airdrops With Bounties</h3>
                </div>
                <div className="center-box-inner">
                  <img src={slide14f} />
                  <h3>Charity Place</h3>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>  
      </div>
    );
  }
}         