import { ReactComponent as Python } from "../icons/skill-icons/pythonbw.svg";
import { ReactComponent as C } from "../icons/skill-icons/c.svg";
import { ReactComponent as Java } from "../icons/skill-icons/java.svg";
import { ReactComponent as JS } from "../icons/skill-icons/js.svg";
import { ReactComponent as SQL } from "../icons/skill-icons/sql.svg";
import { ReactComponent as HTML } from "../icons/skill-icons/html.svg";
import { ReactComponent as CSS } from "../icons/skill-icons/css.svg";
import { ReactComponent as Flask } from "../icons/skill-icons/flask.svg";
import { ReactComponent as React } from "../icons/skill-icons/react.svg";
import { ReactComponent as Pandas } from "../icons/skill-icons/pandas.svg";
import { ReactComponent as Git } from "../icons/skill-icons/git.svg";
import { ReactComponent as Bash } from "../icons/skill-icons/bash.svg";
import { ReactComponent as AndroidStudio } from "../icons/skill-icons/android_studio.svg";
import { ReactComponent as R } from "../icons/skill-icons/r.svg";
import { ReactComponent as Firebase } from "../icons/skill-icons/firebase.svg";
import { ReactComponent as SKL } from "../icons/skill-icons/scikitlearn.svg";
import { ReactComponent as Ruby } from "../icons/skill-icons/ruby.svg";
import { ReactComponent as Rails } from "../icons/skill-icons/rails.svg";
import { ReactComponent as Next } from "../icons/skill-icons/next.svg";
import { ReactComponent as Express } from "../icons/skill-icons/express.svg";
import { ReactComponent as Docker } from "../icons/skill-icons/docker.svg";
import { ReactComponent as ReactNative } from "../icons/skill-icons/react-native.svg";


import "../styles/skills.css";

const skillsData = [
  {
    type: "Languages",
    skills: [
      { name: "Python", icon: Python },
      { name: "C/C++", icon: C },
      { name: "Java", icon: Java },
      { name: "JavaScript", icon: JS },
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "SQL", icon: SQL },
      { name: "Ruby", icon: Ruby },
      { name: "R", icon: R },
      { name: "Bash", icon: Bash },
    ],
  },
  {
    type: "Libraries/Tools",
    skills: [
      { name: "React", icon: React },
      { name: "Express", icon: Express },
      { name: "Flask", icon: Flask },
      { name: "Firebase", icon: Firebase },
      { name: "Rails", icon: Rails },
      { name: "Next", icon: Next },
      { name: "React Native", icon: ReactNative },
      { name: "Android Studio", icon: AndroidStudio },
      { name: "Pandas", icon: Pandas },
      { name: "Scikit-Learn", icon: SKL },
      { name: "Docker", icon: Docker },
      { name: "Git", icon: Git },
    ],
  },
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="separator">
        {skillsData.map((category, index) => (
          <div className="skill-container" key={index} data-aos="fade-down">
            <p className="skill-type">{category.type}</p>
            <ul className="skills-list">
              {category.skills.map((skill, index) => (
                <li className="btn btn--plain" key={index}>
                  <div className="skill">
                    <skill.icon className="skill-img" /> <p>{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
