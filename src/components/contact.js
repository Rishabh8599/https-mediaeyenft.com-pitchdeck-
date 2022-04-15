import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="slide-container slide-container4 slide-container8">
          
          <div className="data-container" style={{gridTemplateColumns: "3fr 3fr" , padding: "5vh 0"}}>
            
              
              <div className="right-container" style={{padding: "0"}}>
                <ScrollAnimation 
                  animateIn="fadeIn"
                  animateOut="fadeOut"
                  duration={1.2}
                  delay={1.5}
                >
                  <h1 className="grad-head" style={{fontSize: "8vh" , webkitTextStroke: "0.5vh transparent" , padding: "0 0 3vh 0" , direction: "ltr"}}>Talk to us.</h1>
                </ScrollAnimation>
                <ScrollAnimation 
                  animateIn="fadeInLeft"
                  animateOut="fadeOut"
                  duration={1.2}
                  delay={1.5}
                >
                  <h5 className="para-head1" style={{fontSize: "4vh"}}>Please reach out and join us</h5>
                  <ul className="link-list">
                    <li><strong>Email Address</strong></li>
                    <li><a href="mailto:mediaeye@mediaeyenft.com">mediaeye@mediaeyenft.com</a></li>
                    <li><strong>Twitter</strong></li>
                    <li><a href="https://twitter.com/MeDIAeYeNFT">https://twitter.com/MeDIAeYeNFT</a></li>
                    <li><strong>Telegram</strong></li>
                    <li><a href="https://t.me/MeDIAeYeNFTofficial">https://t.me/MeDIAeYeNFTofficial</a></li>
                    <li><strong>discord</strong></li>
                    <li><a href="https://discord.com/invite/mediaeye">https://discord.com/invite/mediaeye</a></li>
                  </ul>
                </ScrollAnimation>
              </div>
          </div>
        </div>  
      </div>
    );
  }
}         