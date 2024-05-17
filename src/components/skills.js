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
import { ReactComponent as NumPy } from "../icons/skill-icons/numpy.svg";
import { ReactComponent as Git } from "../icons/skill-icons/git.svg";

import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title down">Skills</h2>
      <div className="separator">
        <div className="skill-container">
          <p className="skill-type">Languages</p>
          <ul className="skills-list">
            <li className="btn btn--plain">
              <div className="skill">
                <Python className="skill-img" /> <p>Python</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <C className="skill-img" /> <p>C/C++</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <Java className="skill-img" /> <p>Java</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <HTML className="skill-img" /> <p>HTML</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <CSS className="skill-img" /> <p>CSS</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <JS className="skill-img" /> <p>JavaScript</p>
              </div>
            </li>
            <li className="btn btn--plain">
              <div className="skill">
                <SQL className="skill-img" /> <p>SQL</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="skill-container">
          <p className="skill-type">Libraries and Tools</p>
          <ul className="skills-list">
            <li className="btn btn--plain">
              <div className="skill">
                <Flask className="skill-img" /> <p>Flask</p>
              </div>
            </li>
            <li className="btn btn--plain">
            <div className="skill">
                <React className="skill-img" /> <p>React</p>
              </div>
            </li>
            <li className="btn btn--plain">
            <div className="skill">
                <Pandas className="skill-img" /> <p>Pandas</p>
              </div>
            </li>
            <li className="btn btn--plain">
            <div className="skill">
                <NumPy className="skill-img" /> <p>NumPy</p>
              </div>
            </li>
            <li className="btn btn--plain">
            <div className="skill">
                <Git className="skill-img" /> <p>Git</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
