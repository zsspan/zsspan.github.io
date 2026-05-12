import React, { useState, useEffect } from "react";
import "../styles/about.css";
import "../styles/experience.css";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const handleResize = () => setIsMobile(mq.matches);

    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  const experiences = [
    {
      company: "Rocket",
      logo: "rocket.png",
      position: "Software Engineer Intern",
      dates: "May - Aug, 2026",
      location: "Detroit, MI",
      accent: "exp-card--rocket",
    },
    {
      company: "Shopify",
      logo: "shop.png",
      position: "Software Engineering Intern",
      dates: "Sep - Dec, 2025",
      location: "Toronto, ON",
      accent: "exp-card--shopify-b",
    },
    {
      company: "Shopify",
      logo: "shopify.png",
      position: "Software Engineering Intern",
      dates: "Jan - Apr, 2025",
      location: "Toronto, ON",
      accent: "exp-card--shopify-a",
    },
  ];

  return (
    <section
      className="section experience-section"
      id="experience"
      data-aos="fade-up"
      data-aos-duration="200"
    >
      <div className="about experience-wrap">
        <div className="section-head">
          <h2 className="section-title">EXPERIENCE</h2>
        </div>
        <ul className="experience-list">
          {experiences.map((exp, index) => (
            <li
              className={`exp-card ${exp.accent}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              key={`${exp.company}-${exp.dates}`}
            >
              <div className="exp-card__content">
                <div className="exp-card__top">
                  <div className="exp-card__brand">
                    <img src={exp.logo} alt="" className="exp-card__logo" />
                    <span className="exp-card__company">{exp.company}</span>
                  </div>
                  <span className="exp-card__dates">{exp.dates}</span>
                </div>
                <p className="exp-card__role">{exp.position}</p>
                <p className="exp-card__location">{exp.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
