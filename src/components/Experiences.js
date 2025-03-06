import "../styles/about.css";
import "../styles/experience.css";

const Experience = () => {
  return (
    <section className="section" id="experience" data-aos="fade-up" data-aos-duration="200">
      <div className="about center">
        <h2 className="role" >EXPERIENCES</h2>
        <div className="bottom-content">
          <div className="card" data-aos="fade-left">
            <div className="card-header">
              <img src="shopify.png" alt="Shopify Logo" className="logo" />
              <span className="company">Shopify</span>
            </div>
            <div className="card-body">
              <p className="position">Software Engineering Intern</p>
              <div className="dates-location">
                <p className="dates">Jan 2025 - Apr 2025</p>
                <p className="location">Toronto, ON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
