import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Scroll from "./components/Scroll";

import "./styles/App.css"; // Import CSS file for additional styling

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Experience = lazy(() => import("./components/Experiences"));

const PageFallback = () => (
  <div className="page-fallback" aria-hidden="true">
    <span className="page-fallback__bar" />
    <span className="page-fallback__bar page-fallback__bar--short" />
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div id="top" className="theme app gradient">
      <Header />

      <main className="main-shell">
        <Suspense fallback={<PageFallback />}>
          <About data-aos="fade-up" />
          <Experience data-aos="fade-up" />
          <Education data-aos="fade-up" />
          <Skills data-aos="fade-up" />
        </Suspense>
      </main>

      <section className="main-shell--wide">
        <Suspense fallback={<PageFallback />}>
          <Projects data-aos="fade-up" />
        </Suspense>
      </section>

      <Scroll />
      <Footer />
    </div>
  );
};

export default App;