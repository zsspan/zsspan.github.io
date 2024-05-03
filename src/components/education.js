import "../styles/about.css";

const About = () => {
  return (
    <section className="section" id="education">
      <div className="about center">
        <h2 className="role">EDUCATION AND AWARDS</h2>
        <div className="bottom-content">
            <div className="desc2">
              <span className="head-span">University of Toronto (2023-Present)</span>
              <p><span className="subheading">Degree:</span> HBSc in Computer Science (Co-OP)</p>
              <p><span className="subheading">Awards:</span> University of Toronto Scholar, Dean's List 2023</p>
              <p><span className="subheading">Activities:</span> AMACSS - First Year Associate</p>
              <span className="head-span">Pickering High School (2019-2023)</span>
              <p><span className="subheading">Awards:</span> Ontario Scholar, 4x Honour Roll, multiple highest proficiency awards</p>
              <p><span className="subheading">Admission Average:</span> ~97.8% </p>
              <p><span className="subheading">Activities:</span> Students for Change, debate team, mock trial, chess club,<br></br> 
              engineering club, robotics, math club</p>
              <span className="head-span">Ontario Gifted Certificate</span>
              <p>Enrolled in Ontario Gifted Program and took subsequent classes grades 4-12 </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
