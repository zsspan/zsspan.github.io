import React, { useState } from "react";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Globe } from "../icons/globe.svg";
import { ReactComponent as Close } from "../icons/close.svg";

import "../styles/header.css";

const Header = () => {
  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList(!showNavList);
  
  const resize = () => {
    const size = window.innerWidth > 600;
    const home = document.querySelector(".home");
  
    if (size) {
      home.style.display = 'none';
    } else {
      home.style.display = 'block';
    }
  };
  
  window.addEventListener("resize", resize);
  return (
    <>
      <header className="header center">
        <h3>
          <a href="#" className="link">
            <Globe className="top-svg globe" fontSize="large"/>
          </a>
        </h3>
        <nav className="center nav">
          <ul
            style={{ display: showNavList ? "flex" : null }}
            className="nav-list"
          >
            <li className="nav-list-item home">
              <a
                href="#"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Home
              </a>
            </li>
            <li className="nav-list-item">
              <a
                href="#skills"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Skills
              </a>
            </li>
            <li className="nav-list-item">
              <a
                href="#education"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Education
              </a>
            </li>
            <li className="nav-list-item">
              <a
                href="#experience"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Experiences
              </a>
            </li>
            <li className="nav-list-item">
              <a
                href="#projects"
                onClick={toggleNavList}
                className="link link--nav"
              >
                Projects
              </a>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav-btn"
            aria-label="toggle navigation"
          >
            {showNavList ? <Close className="top-svg"/> : <Menu className="top-svg"/>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
