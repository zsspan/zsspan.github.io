import React, { useState, useEffect } from "react";
import "../styles/about.css";
import "../styles/experience.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="section"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="200"
    >
      <div className="about center">
        <h2 className="section-title">EXPERIENCES</h2>
        <div className="bottom-content">
          <div className="card" data-aos="fade-left">
            <div className="card-header">
              <img src="shopify.png" alt="Shopify Logo" className="logo" />
              <span className="company">Shopify</span>
            </div>
            <div className="card-body">
              <p className="position">
                {isMobile ? "SWE Intern" : "Software Engineering Intern"}
              </p>
              <div className="dates-location">
                <p className="dates">Jan - Apr 2025</p>
                <p className="location">Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
