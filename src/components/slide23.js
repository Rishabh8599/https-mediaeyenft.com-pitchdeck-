import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide23 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container4">
          
          <div className="data-container">
            <ScrollAnimation 
              animateIn="fadeInUp"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="right-container">
                <h1 className="white-head" style={{fontSize: "5vh" , padding: "0" }}>MeDIA eYe NFT Portal, We got you covered!</h1>
                <ul className="check-list">
                  <li>Gaming</li>
                  <li>Crypto</li>
                  <li>Sports</li>
                  <li>Entertainment</li>
                  <li>Art & Collectibles</li>
                  <li>Music</li>
                  <li>Social Media</li>
                  <li>Businesses</li>
                  <li>Advertising</li>
                  <li>Goods & Services</li>
                  <li>Charities</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}         