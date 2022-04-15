import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Slide25 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container4 slide-container6">
          
          <div className="data-container" style={{gridTemplateColumns: "none" , direction: "ltr"}}>
            <ScrollAnimation 
              animateIn="fadeInUp"
              animateOut="fadeOut"
              duration={1.2}
              delay={1.5}
            >
              
              <div className="right-container center-container" style={{margin: "22vh 0px 8vh 6vh" , padding: "0"}}>
                <h1 className="grad-head-fill">Ethereum, bsc and fantom</h1>
                <ul className="check-list" style={{padding: "10vh 11vh"}}>
                  <li>Multi-chain services ETH and BSC, FTM</li>
                  <li>Minting 721 and 1155</li>
                  <li>Cross chain subscription model</li>
                  <li>Cross chain NFT transfer</li>
                  <li>Multi-chain NFT launcher</li>                    
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>  
      </div>
    );
  }
}