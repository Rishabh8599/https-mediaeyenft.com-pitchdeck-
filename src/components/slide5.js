import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide5 from "../static/image/Slide5.png";

export default class Slide5 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide5} class="img-responsive" />
            <div className="box5">
              <h1 className="grad-head2">Intro to MeDIA eYe NFT Portal</h1>
              
              <h5 className="para-head1">
                MeDIA eYe is a multi-chain non-custodial NFT protocol developed by technology enthusiasts and entrepreneurs to reduce the complexities around creating NFT for users, brands, artists, gamers, enterainers, social media, crypto protocols, collectors, charities, businesses and others.
              </h5>
              <h5 className="para-head1">
                MeDIA NFT Portal puts the power of blockchain to work for you, offering both a wide range of services for creators, collectors advertisers, businesses, charitable organisations and others.
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         