import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide24 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container4 slide-container5">
          
          <div className="data-container" style={{gridTemplateColumns: "none" , direction: "ltr"}}>
            <ScrollAnimation 
              animateIn="fadeInUp"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="container">
                <div className="right-container" style={{marginTop: "6vh" , padding: "0"}}>
                  <h1 className="grad-head" style={{fontSize: "7vh" , padding: "0" , webkitTextStroke: "0.5vh transparent"}}>MeDIA eYe NFT Portal</h1>
                  <h1 className="white-head" style={{fontSize: "9vh" , padding: "0" }}>Leading the Way!</h1>
                  <ul className="check-list" style={{padding: "5vh 0.5vh"}}>
                    <li>Frictionless</li>
                    <li>Competitive fees</li>
                    <li>Comunity centric</li>
                    <li>Business friendly</li>
                    <li>Multi-chain scalability</li>
                    <li>Fiat and crypto on-ramps</li>
                    <li>Cross chain functionality</li>
                    <li>Non-custodial services</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div> 
      </div>
    );
  }
}         