import React, { useState, useEffect } from "react";
import { ReactComponent as Menu } from "../icons/menu.svg";
import { ReactComponent as Globe } from "../icons/globe.svg";
import { ReactComponent as Close } from "../icons/close.svg";

import "../styles/header.css";

const navLinks = [
  { href: "#about", label: "About", className: "nav-list-item home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

const Header = () => {
  const [showNavList, setShowNavList] = useState(false);
  const toggleNavList = () => setShowNavList((open) => !open);

  useEffect(() => {
    const home = document.querySelector(".home");

    const applyHomeVisibility = () => {
      if (!home) return;
      home.style.display = window.innerWidth > 600 ? "none" : "block";
    };

    applyHomeVisibility();
    window.addEventListener("resize", applyHomeVisibility);
    return () => window.removeEventListener("resize", applyHomeVisibility);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showNavList ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showNavList]);

  return (
    <header className="header">
      <div className="header__inner center">
        <h3 className="header__brand">
          <a href="#top" className="link header__logo" aria-label="Zohair Syed home">
            <Globe className="top-svg globe" />
            <span className="header__wordmark">ZS</span>
          </a>
        </h3>
        <nav className="center nav" aria-label="Primary">
          <ul
            className={`nav-list${showNavList ? " nav-list--open" : ""}`}
          >
            {navLinks.map(({ href, label, className }) => (
              <li
                key={href}
                className={["nav-list-item", className].filter(Boolean).join(" ")}
              >
                <a
                  href={href}
                  onClick={() => setShowNavList(false)}
                  className="link link--nav"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav-btn"
            aria-expanded={showNavList}
            aria-label={showNavList ? "Close menu" : "Open menu"}
          >
            {showNavList ? <Close className="top-svg" /> : <Menu className="top-svg" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
