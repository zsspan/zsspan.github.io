import "../styles/footer.css";

const Footer = () => (
    <footer className="footer">
      <div className="footer-container">
        <p className="name">Zohair Syed - 2024</p>
        <div className="links-box">
          <a href="mailto:1syedzohair@gmail.com" className="footer-link">
            1syedzohair@gmail.com
          </a>
          <a href="mailto:zohairr.syed@mail.utoronto.ca" className="footer-link">
            zohairr.syed@mail.utoronto.ca
          </a>
          <a
            href="https://www.linkedin.com/in/zohairsyed"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/zohairsyed
          </a>
        </div>
        <p className="footer-note">
          Made with <span className="react-icon" aria-hidden>⚛️</span> React
        </p>
      </div>
    </footer>
);

export default Footer;
