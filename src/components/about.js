import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/ig.svg";
import "../styles/about.css";

const About = () => {
  
  // Add event listener for window resize
  const handleResize = () => {
    const isMobile = window.innerWidth < 460;
    const role = document.querySelector(".role .colour");
  
    if (isMobile) {
      role.textContent = "CS";
    } else {
      role.textContent = "Computer Science";
    }
  };
  
  window.addEventListener("resize", handleResize);

  return (
    <div className="about center">
      <h1>
        Welcome, I am <span className="about-name">Zohair Syed</span>
      </h1>
      <div className="bottom-content">
        <div className="left">
          <h2 className="role">
            <span class="colour">Computer Science</span> @ UofT
          </h2>
          <p className="desc">
            Hi! My name is Zohair Syed and I am currently a 2nd-year CS co-op student at
            the University of Toronto, doing a specialist in software engineering. 
            I am passionate about most topics and you can find me interested in almost all subjects from technology, math
            and science all the way to history, language and literature.
            <br></br>
            <br></br>I have a diverse skillset in computer science and am
            proficient in many full-stack languages. Alongside my software engineering specialist,
            I am doing a minor in statistics and I hope to pursue the intersection of these disciplines
            and explore the realm of machine learning.
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
              <Instagram/>
            </a>
            <a
              href="https://github.com/zsspan"
              aria-label="github"
              className="link link--icon"
              target="_blank"
            >
              <GitHub/>
            </a>
            <a
              href="https://www.linkedin.com/in/zohairsyed"
              aria-label="linkedin"
              className="link link--icon"
              target="_blank"
            >
              <LinkedIn/>
            </a>
          </div>
        </div>
        <div className="right">
          <img className="pfp" src="pfp.jpg" alt="pfp"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
