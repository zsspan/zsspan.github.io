import { useEffect } from "react";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/ig.svg";
import "../styles/about.css";

const About = () => {
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 720;
      const role = document.querySelector(".role .colour");

      if (role) {
        role.textContent = isMobile ? "CS" : "Computer Science";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="about" className="section section--hero about-section">
      <div className="about">
        <div className="section-head section-head--hero">
          <h1 className="hero-title">
            Welcome, I am <span className="about-name">Zohair Syed</span>
          </h1>
        </div>
        <div className="bottom-content">
          <div className="left hero-card">
            <h2 className="role">
              <span className="colour">Computer Science</span> @ UofT
            </h2>
            <p className="desc">
              Hey, I'm Zohair and I am currently a 3rd-year student at the
              University of Toronto pursuing a specialist in software engineering
              with a minor in statistics. I have always been passionate about most
              topics including technology, but also otherwise in science, history,
              photography, and literature.
            </p>
            <p className="desc desc--tight">
              As an undergrad student, I am determined to continuously learn more
              about the vast field of computer science and share my thoughts and
              skills with those around me :)
            </p>
            <div className="contact-info center">
              <a href="mailto:zohairr.syed@mail.utoronto.ca">
                <span type="button" className="btn btn--outline">
                  Email
                </span>
              </a>
              {/* <a
                href="#"
                aria-label="instagram"
                className="link link--icon social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a> */}
              <a
                href="https://github.com/zsspan"
                aria-label="github"
                className="link link--icon social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/zohairsyed"
                aria-label="linkedin"
                className="link link--icon social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="right">
            <div className="pfp-frame">
              <img className="pfp" src="pfp.jpg" alt="Zohair Syed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
