import React, { useContext } from 'react'; 
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer';
import Scroll from './components/scroll';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';


import './styles/App.css'; // Import CSS file for additional styling

const App = () => {
  // const { themeName } = useContext(ThemeContext)
  // console.log(themeName)
  return (
    <div id='top' className='theme app gradient'>
      <Header/>

      <main>
        <About />
        <Skills />
        <Education/>
        <Projects />

      </main>

      <Scroll />
      <Footer />
    </div>
  )
}

export default App
