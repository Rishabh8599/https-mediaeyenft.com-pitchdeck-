import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./components/Homepage.js";
import Portfolio from "./components/Portfolio.js";
import Slide3 from "./components/slide3.js";
import Slide4 from "./components/slide4.js";
import Slide5 from "./components/slide5.js";
import Slide7 from "./components/slide7.js";
import Slide8 from "./components/slide8.js";
import Slide9 from "./components/slide9.js";
import Slide10 from "./components/slide10.js";
import Slide11 from "./components/slide11.js";
import Slide12 from "./components/slide12.js";
import Slide13 from "./components/slide13.js";
import Slide14 from "./components/slide14.js";
import Slide15 from "./components/slide15.js";
import Slide16 from "./components/slide16.js";
import Slide17 from "./components/slide17.js";
import Slide18 from "./components/slide18.js";
import Slide19 from "./components/slide19.js";
import Slide20 from "./components/slide20.js";
import Slide22 from "./components/slide22.js";
import Slide23 from "./components/slide23.js";
import Slide24 from "./components/slide24.js";
import Slide25 from "./components/slide25.js";
import Slide26 from "./components/slide26.js";
import Contact from "./components/contact.js";

import "./style/animate.css";
import "./style/styles.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid" style={{padding: "0"}}>
        <Homepage />
        <Portfolio />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
        <Slide15 />
        <Slide16 />
        <Slide17 />
        <Slide18 />
        <Slide19 />
        <Slide20 />
        <Slide22 />
        <Slide23 />
        <Slide24 />
        <Slide25 />
        <Slide26 />
        <Contact />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
