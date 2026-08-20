import { useEffect } from "react";
import { ReactComponent as GitHub } from "../icons/github.svg";
import { ReactComponent as LinkedIn } from "../icons/linkedin.svg";
import { ReactComponent as Instagram } from "../icons/ig.svg";
import { ReactComponent as Sporcle } from "../icons/sporcle.svg";
import { ReactComponent as Camera } from "../icons/camera.svg";
import { ReactComponent as Report } from "../icons/report.svg";
import "../styles/about.css";

// Primary contact links (core socials, sits next to the Email button)
const primaryLinks = [
  {
    key: "github",
    href: "https://github.com/zsspan",
    label: "github",
    Icon: GitHub,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/zohairsyed",
    label: "linkedin",
    Icon: LinkedIn,
  },
  // {
  //   key: "instagram",
  //   href: "#",
  //   label: "instagram",
  //   Icon: Instagram,
  // },
];

// Secondary links (personal projects / extras), shown after the divider
const secondaryLinks = [
    {
    key: "write-ups",
    href: "https://drive.google.com/drive/folders/1pEPjTcFwncFG14nGZUWpYu-WwVUBBP3o?usp=sharing",
    label: "write-ups",
    Icon: Report,
  },
  {
    key: "sporcle",
    href: "https://www.sporcle.com/user/PineappleTrivia/",
    label: "sporcle",
    Icon: Sporcle,
  },
  {
    key: "photography",
    href: "https://zohairsyedphotography.vercel.app/",
    label: "photography",
    Icon: Camera,
  },
];

const SocialLink = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    className="link link--icon social-icon"
    target="_blank"
    rel="noreferrer"
  >
    <Icon />
  </a>
);

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
              Hey, I'm Zohair and I'm a 3rd-year student at the
              University of Toronto pursuing a specialist in software
              engineering with a minor in statistics. Here you can find a
              collection of my academic, personal and professional work.
            </p>
            <p className="desc desc--tight">
              I have always been passionate about most topics including
              technology, but also enjoy science, history,
              photography, and literature. Aside from the regular links
              below, you can also find some of my writeups, my Sporcle quizzes, and
              a WIP photography website :)
            </p>
            <div className="contact-info center">
              <div className="contact-group">
                <a href="mailto:zohairr.syed@mail.utoronto.ca">
                  <span type="button" className="btn btn--outline">
                    Email
                  </span>
                </a>
                {primaryLinks.map(({ key, ...link }) => (
                  <SocialLink key={key} {...link} />
                ))}
              </div>

              <div className="contact-divider" aria-hidden="true" />

              <div className="contact-group">
                {secondaryLinks.map(({ key, ...link }) => (
                  <SocialLink key={key} {...link} />
                ))}
              </div>
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