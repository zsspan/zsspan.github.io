import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  // Hardcoded example projects
  const projectList = [
    {
      name: 'QuickUp',
      description: 'The all-in-one notes and task management Chrome web app, QuickUp!',
      tools: ['Chrome APIs', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      image: 'quickup.png',
      sourceCode: 'https://github.com/zsspan/QuickUp',
      livePreview: 'https://chromewebstore.google.com/detail/quickup/lafgjhgpdaejfnnihhjaggebmicabemc?authuser=3'
    },
    {
      name: 'TAAM Android App',
      description: 'A full-stack Android App made for the TAAM in conjunction with the CSCB07 Software Design course.',
      tools: ['Android Studio', 'Java', 'Firebase', 'Mockito'],
      image: 'taam.png',
      sourceCode: 'https://github.com/zsspan/Toronto-Asian-Art-Museum-Android-App'
    },
    {
      name: 'Personal Website',
      description: 'The website you are currently viewing :)',
      tools: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'website.png', 
      sourceCode: 'https://github.com/zsspan/zsspan.github.io',
      livePreview: 'https:zsspan.github.io'
    },
    {
      name: 'Easy NBA',
      description: 'Flask server that uses web scraping, machine learning, databases, and custom curated datasets to predict, visualize and analyze in-depth NBA player statistics',
      tools: ['Python', 'Flask', 'mySQL', 'Pandas', 'BeautifulSoup', 'Scikit-Learn', 'Seaborn'],
      image: 'easynba.png', 
      sourceCode: 'https://github.com/zsspan?tab=repositories',
    },
    {
      name: 'CSCB20 Course Webpage',
      description: 'A full-stack course webpage designed for a university-level web development course.',
      tools: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: 'cscb20.png', 
      sourceCode: 'https://github.com/zsspan/course-webpage',
    },
    {
      name: 'nowSOS: Emergency Notification App',
      description: 'A research and design-based concept emergency app for the CSCC10 (HCI) course',
      tools: ['Figma', 'Research', 'UCD Process', 'User Testing'],
      image: 'nowsosprop.png', 
      sourceCode: 'https://docs.google.com/document/d/1N9SxnsNJASZdvgbfpsQwr4k0cprsaz6N0z4_CTqJkjw/edit?tab=t.0',
    },
    {
      name: 'Full Repository List',
      description: 'A collection of other minor projects, custom APIs, and more',
      tools: [],
      image: 'github.png', 
      sourceCode: 'https://github.com/zsspan?tab=repositories',
    }
  ];

  return (
    <section id='projects' className='section projects'>
      <h2 className='section-title'>Projects</h2>

      <div className='projects-grid'>
        {projectList.map((project, index) => (
          <div className='project' key={index}>
            <div className='project-header'>
              <h3>{project.name}</h3>
              {project.livePreview && (
                <a href={project.livePreview} className='icon-link' target='_blank'>
                  <i className='fas fa-external-link-alt'></i>
                </a>
              )}
            </div>
            <p className='project-description'>{project.description}</p>
            <a href={project.sourceCode} className='link link--icon' target='_blank'>
              <img src={project.image} className='project-image' />
            </a>
            <ul className='project-tools'>
              {project.tools.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
