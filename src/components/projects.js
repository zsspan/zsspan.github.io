import React from 'react';
import projectList from '../projectList';
import '../styles/projects.css';

const Projects = () => {
  return (
    <section id='projects' className='section projects' data-aos="fade-up" data-aos-duration="200">
      <h2 className='section-title'>Projects</h2>

      <div className='projects-grid' data-aos='fade-right'>
        {projectList.map((project, index) => (
          <div className='project' key={index}>
            <div className='project-header'>
              <h3>{project.name}</h3>
              {project.livePreview && (
                <a href={project.livePreview} className='icon-link' target='_blank' rel="noopener noreferrer">
                  <i className='fas fa-external-link-alt'></i>
                </a>
              )}
            </div>
            <p className='project-description'>{project.description}</p>
            <a href={project.sourceCode} className='link link--icon' target='_blank' rel="noopener noreferrer">
              <img src={project.image} className='project-image' alt={project.name} />
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
