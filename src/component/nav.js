import logo from "../assets/Logo.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import React, { useState } from "react";

function Nav() {
  const [active, toggleVeiw] = useState(true);

 


  return (
    <div className="fixed">
      <div
        className={`  ${
          active !== true ? "active-menu-button" : "menu-button"
        }`}
        onClick={() => toggleVeiw(!active)}></div>

      <nav className={` sidenav ${active !== true && "active-nav"}`}>
        <a className="active" href="#main" name="main">
          <img alt="Logo" className="logo" src={logo} />
        </a>
        <div>
          <hr />

          <a
            href="#know-me"
            name="know-me"
            className={`sidenav-link `}
            onClick={() => toggleVeiw(!active)}>
            Know me
          </a>
          <hr />
          <a
            href="#my-skills"
            name="my-skills"
            className={`sidenav-link `}
            onClick={() => toggleVeiw(!active)}>
            My Skills
          </a>
          <hr />

          <a
            href="#my-projects"
            name="my-projects"
            className={`sidenav-link 
             `}
            onClick={() => toggleVeiw(!active)}>
            My Projects
          </a>
          <hr />

          <a
            href="#myArt"
            name="myArt"
            className={`sidenav-link `}
            onClick={() => toggleVeiw(!active)}>
            My Art
          </a>
          <hr />

          <a
            href="#contact-me"
            name="contact-me"
            className={`sidenav-link `}
            onClick={() => toggleVeiw(!active)}>
            Contact me
          </a>
          <hr />
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/moatasemshaltout/"
            target="_blank"
            rel="noreferrer">
            <embed src={linkedin} />
          </a>
          <a href="https://github.com/M3tesim" target="_blank" rel="noreferrer">
            <embed src={github} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
