import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide26 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container4 slide-container7">
          
          <div className="data-container">
            <ScrollAnimation 
              animateIn="fadeInUp"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              <div className="right-container" style={{padding: "0"}}>
                <ul className="check-list" style={{fontFamily: "Furore" , padding: "10vh 0px"}}>
                  <li>NFT MARKETPLACE</li>
                  <li>NFT COLLECTIONS</li>
                  <li>NFT HUB AGGREGATES LEADING MARKETPLACES</li>
                  <li>EVENTS GALLERY</li>
                  <li>NFT LAUNCHER MULTI-CHAIN</li>
                  <li>NFT BUNDLING</li>
                  <li>SIGN UP WITH GOOGLE, FACEBOOK OR DEFI WALLET</li>
                  <li>ON-CHAIN REWARDS POOLS FOR TOP USERS</li>
                  <li>ARTISTS ROYALTIES</li>
                  <li>PROCEEDS SPLITS</li>
                  <li>CHARITY PLACE</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div> 
      </div>
    );
  }
}         