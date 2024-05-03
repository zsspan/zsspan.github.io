import "../styles/skills.css";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title down">Skills</h2>
      <div className="separator">
        <div className="skill-container">
          <p>Languages</p>
          <ul className="skills-list">
            <li className="skill btn btn--plain">Python</li>
            <li className="skill btn btn--plain">C/C++</li>
            <li className="skill btn btn--plain">Java</li>
            <li className="skill btn btn--plain">HTML/CSS</li>
            <li className="skill btn btn--plain">JavaScript</li>
            <li className="skill btn btn--plain">SQL</li>
          </ul>
        </div>
        <div className="skill-container">
          <p>Libraries and Tools</p>
          <ul className="skills-list">
            <li className="skill btn btn--plain">Flask</li>
            <li className="skill btn btn--plain">React</li>
            <li className="skill btn btn--plain">Pandas</li>
            <li className="skill btn btn--plain">NumPy</li>
            <li className="skill btn btn--plain">Git</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
