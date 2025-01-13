import React from 'react'
import reactLogo from "../assets/Reeact.svg";
import Figma from "../assets/Figma.svg";
import Sass from "../assets/Sass.svg";
import Wordpress from "../assets/Wordpress.svg";
import Typescript from "../assets/Typescript.svg";
import Html from "../assets/Html.svg";
import Css from "../assets/Css.svg";
import JavaScriptt from "../assets/JavaScript.svg";

const Skills = () => {
  return (
    <div className="container text-center" style={{ maxWidth: "800px", marginTop: "75px" }}>

      <h2>Skills</h2>
      <div className="row g-1 mt-5 ">
        <div className="col-6 col-md-3 mb-4 mb-md-5">
          <img src={reactLogo} alt="React" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Figma} alt="Figma" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Sass} alt="Sass" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Wordpress} alt="WordPress" />
        </div>
      </div>
      <div className="row g-1">
        <div className="col-6 col-md-3 mb-4">
          <img src={Typescript} alt="TypeScript" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Html} alt="HTML" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={Css} alt="CSS" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src={JavaScriptt} alt="JavaScript" />
        </div>
      </div>
    </div>
  );
};


export default Skills