import React, { useState, useEffect } from "react";
import { ReactComponent as Arrow } from "../icons/arrowup.svg";
import "../styles/scroll.css";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);
      const duration = window.innerWidth < 1100 ? 1000 : 10000; // Set duration to null if width > 1000
      if (duration !== null) {
        timeoutId = setTimeout(() => setIsVisible(false), duration);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={isVisible ? "scroll-top" : "scroll-hide"}>
      <div className="circle">
        <a href="#top">
          <Arrow className="arrow" fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Scroll;
