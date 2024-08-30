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
      livePreview: 'https://example.com/example-project-1'
    },
    {
      name: 'TAAM Android App',
      description: 'A full-stack Android App made for the TAAM in conjunction with the CSCB07 Software Design course.',
      tools: ['Android Studio', 'Java', 'Firebase', 'Mockito'],
      image: 'taam.png',
      sourceCode: 'https://github.com/zsspan/Toronto-Asian-Art-Museum-Android-App',
      livePreview: 'https://example.com/example-project-1'
    },
    {
      name: 'Personal Website',
      description: 'The website you are currently viewing :)',
      tools: ['HTML', 'CSS', 'JavaScript', 'React'],
      image: 'website.png', 
      sourceCode: 'https://github.com/zsspan/zsspan.github.io',
    },
    {
      name: 'Easy NBA',
      description: 'A Flask app that processes inputted NBA players and uses web scraping, and data tools to provide in-depth statistics and future predictions',
      tools: ['Python', 'Flask', 'SQLite', 'Pandas', 'BeautifulSoup', 'Seaborh', 'Matplotlib'],
      image: 'easynba.png', 
      sourceCode: 'https://github.com/zsspan?tab=repositories',
    },
    {
      name: 'CSCB20 Course Webpage',
      description: 'A full-stack course webpage designed for the CSCB20 UTSC course.',
      tools: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
      image: 'cscb20.png', 
      sourceCode: 'https://github.com/zsspan/course-webpage',
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
            <h3>{project.name}</h3>
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
