import "../styles/about.css";

const coursesData = [
  { name: "Intro to CS I/II" },
  { name: "Web Development and Databases" },
  { name: "Software Design" },
  { name: "Network/Systems Programming" },
  { name: "Data Structures and Algorithms" },
  { name: "Computer Organization" },
  { name: "Theory of Computation" },
  { name: "Human-Computer Interaction" },
  { name: "Intro to Software Engineering" },
  { name: "Computational Statistics" },
  { name: "Additional Math Courses" },
  { name: "Linguistics" },
];

const Education = () => {
  return (
    <section className="section education-section" id="education" data-aos="fade-up" data-aos-duration="200">
      <div className="about center">
        <h2 className="section-title">EDUCATION AND AWARDS</h2>
        <div className="education-cards">
          <div className="education-card" data-aos="fade-left">
            <span className="head-span">University of Toronto (2023-Present)</span>
            <p><span className="subheading">Degree:</span> HBSc in Computer Science (Co-op)</p>
            <p><span className="subheading">Awards:</span> University of Toronto Scholar, Dean's List 2023</p>
            <p><span className="subheading">Activities:</span> AMACSS - First Year Associate, Politics Club Exec.</p>
          </div>
          <div className="education-card" data-aos="fade-right">
            <span className="head-span">Pickering High School (2019-2023)</span>
            <p><span className="subheading">Awards:</span> Ontario Scholar, 4x Honour Roll, multiple highest proficiency awards</p>
            <p><span className="subheading">Admission Average:</span> ~97.8% </p>
            <p><span className="subheading">Activities:</span> Students for Change, Debate Team, Mock Trial, Chess Club,<br /> 
            Engineering Club, Robotics, Math Club</p>
            <br />
            <p><span className="subheading">+ Ontario Gifted Certificate:</span> Enrolled in Ontario Gifted Program <br /> 
            and took subsequent classes grades 4-12</p>
          </div>
        </div>
        <div className="courses-section">
          <h3 className="head-span">Courses Taken</h3>
          <div className="separator">
            <ul className="skills-list">
              {coursesData.map((course, index) => (
                <li className="btn btn--plain" key={index}>
                  <div className="skill">
                    <p>{course.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
