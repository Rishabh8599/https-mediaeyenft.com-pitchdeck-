import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import slide12 from "../static/image/Slide12.png";

export default class Contact extends Component {
  render() {
    return (
      <div className="Contact__container" >
        <div className="Portfolio__row row__27">
          <ScrollAnimation
            animateIn="zoomIn"
            animateOut="fadeOut"
            duration={1.2}
            
          >
            <img src={slide12} class="img-responsive" />
            <div className="box3" style={{width : "50%" , gap: "12vh"}}>
              
              <h1 className="white-head" style={{fontSize : "7.9vh"}}>We are focused on helping create brand awareness</h1>
              
              <h5 className="para-head1" style={{fontSize: "5vh " , lineHeight: "1.5"}}>
                While there are many plateforms for creating NFTs, MeDIA eYe provides a wide range of services for creaters, collectors, advertisers and businesses.
              </h5>
            </div>
          </ScrollAnimation>
        </div>  
      </div>
    );
  }
}         