import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Scroll from "./components/scroll";

import "./styles/App.css"; // Import CSS file for additional styling

const About = lazy(() => import("./components/about"));
const Projects = lazy(() => import("./components/projects"));
const Skills = lazy(() => import("./components/skills"));
const Education = lazy(() => import("./components/education"));
const Experience = lazy(() => import("./components/experience"));

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