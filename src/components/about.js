import { useEffect } from "react";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/ig.svg";
import "../styles/about.css";

const About = () => {
  // Add event listener for window resize
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 720;
      const role = document.querySelector(".role .colour");

      if (role) {
        if (isMobile) {
          role.textContent = "CS";
        } else {
          role.textContent = "Computer Science";
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="about center">
      <h1>
        Welcome, I am <span className="about-name">Zohair Syed</span>
      </h1>
      <div className="bottom-content">
        <div className="left">
          <h2 className="role">
            <span className="colour">Computer Science</span> @ UofT
          </h2>
          <p className="desc">
            Hey, I'm Zohair and I am currently a 2nd-year student at the
            University of Toronto pursuing a specialist in software engineering
            with a minor in statistics. I have always been passionate about most
            topics including technology, but also otherwise in science, history,
            photography, and literature.
            <br></br>
            <br></br>
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
            <a
              href="#"
              aria-label="instagram"
              className="link link--icon"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/zsspan"
              aria-label="github"
              className="link link--icon"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/zohairsyed"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
        <div className="right">
          <img className="pfp" src="pfp.jpg" alt="pfp" />
        </div>
      </div>
    </div>
  );
};

export default About;
