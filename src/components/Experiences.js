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

  const experiences = [
    {
      company: "Shopify",
      logo: "shop.png",
      position: isMobile ? "SWE Intern (POS)" : "Software Engineer Intern - Point-of-Sale",
      dates: "Sep - Dec, 2025",
      location: "Toronto, ON",
      gradientClass: "card-1",
    },
    {
      company: "Shopify",
      logo: "shopify.png",
      position: isMobile ? "SWE Intern (Forms)" : "Software Engineer Intern - Forms",
      dates: "Jan - Apr, 2025",
      location: "Toronto, ON",
      gradientClass: "card-2",
    },
  ];

  return (
    <section
      className="section"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="200"
    >
      <div className="about center">
        <h2 className="section-title">EXPERIENCES</h2>
        <div className="bottoms-content">
          {experiences.map((exp, index) => (
            <div
              className={`card ${exp.gradientClass}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              key={index}
            >
              <div className="card-header">
                <img src={exp.logo} alt={`${exp.company} Logo`} className="logo" />
                <span className="company">{exp.company}</span>
              </div>
              <div className="card-body">
                <p className="position">{exp.position}</p>
                <div className="dates-location">
                  <p className="dates">{exp.dates}</p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
