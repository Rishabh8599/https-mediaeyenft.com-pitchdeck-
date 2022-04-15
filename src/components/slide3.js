import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide3 from "../static/image/Slide3.png";

export default class Slide3 extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide3} class="img-responsive" />
            <div className="box3">
              
              <h1 className="white-head">NFT market skyrocketed in the first half of 2021, topping $40bn</h1>
              
              <h5 className="para-head1">
                The market cap jumped more than 10x and more mainstream applications of NFTs, notably NBA Top Shot, have also broken into popular culture, capturing more than 800,000 users and growing its monthly sales from $44M to $232M in Q1 of 2021 alone. 
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         