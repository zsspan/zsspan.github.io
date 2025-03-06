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

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="top" className="theme app gradient">
      <Header />

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <About data-aos="fade-up" />
          <Skills data-aos="fade-up" />
          <Education data-aos="fade-up" />
          <Experience data-aos="fade-up" />
          <Projects data-aos="fade-up" />
        </Suspense>
      </main>

      <Scroll />
      <Footer />
    </div>
  );
};

export default App;