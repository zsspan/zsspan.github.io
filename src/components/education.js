import "../styles/about.css";

const Education = () => {
  return (
    <section
      className="section education-section"
      id="education"
      data-aos="fade-up"
      data-aos-duration="200"
    >
      <div className="about education-inner">
        <div className="section-head">
          <h2 className="section-title">EDUCATION AND AWARDS</h2>
        </div>

        <div className="education-cards">
          <div className="education-card" data-aos="fade-left">
            <div className="education-card__top">
              <div className="education-card__media">
                <img
                  src="/education/uoft.png"
                  alt="University of Toronto"
                  className="education-card__image"
                />
              </div>
              <div className="education-card__header">
                <span className="head-span">University of Toronto</span>
                <time className="education-card__dates" dateTime="2023">
                  2023 — Present
                </time>
              </div>
            </div>
            <div className="education-card__body">
              <p>
                <span className="subheading">Degree:</span> Honours B.Sc. in
                Computer Science
              </p>
              <p>
                <span className="subheading">Program:</span> Specialist in
                Software Engineering, Minor in Statistics
              </p>
              <p>
                <span className="subheading">Awards:</span> University of
                Toronto Scholar, 3x Dean's List
              </p>
              <p>
                <span className="subheading">Activities:</span> AMACSS - First
                Year Associate, Director of Academic Operations, CSCA08/A48
                Course Representative, 2024 Politics Club Exec.
              </p>
            </div>
          </div>

          <div className="education-card" data-aos="fade-right">
            <div className="education-card__top">
              <div className="education-card__media">
                <img
                  src="/education/phs.jpg"
                  alt="Pickering High School"
                  className="education-card__image"
                />
              </div>
              <div className="education-card__header">
                <span className="head-span">Pickering High School</span>
                <time className="education-card__dates" dateTime="2019">
                  2019 — 2023
                </time>
              </div>
            </div>
            <div className="education-card__body">
              <p>
                <span className="subheading">Awards:</span> Ontario Scholar, 4x
                Honour Roll, multiple highest proficiency awards
              </p>

              <p>
                <span className="subheading">Activities:</span> Students for
                Change, Debate Team, Mock Trial, Chess Club, Engineering Club,
                Robotics, Math Club
              </p>
              <p>
                <span className="subheading">Admission Average:</span> ~97.8%
              </p>
              <p>
                <span className="subheading">Extra:</span> Ontario Gifted
                Certificate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
