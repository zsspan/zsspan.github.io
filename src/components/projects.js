import React from "react";
import projectList from "../projectList";
import "../styles/projects.css";

const Projects = () => {
  return (
    <section id="projects" className="section projects" data-aos="fade-up" data-aos-duration="200">
      <div className="section-head section-head--center">
        <h2 className="section-title section-title--center">PROJECTS</h2>
      </div>

      <div className="projects-grid" data-aos="fade-right">
        {projectList.map((project, index) => {
          const hasRepo = Boolean(project.sourceCode);
          const image = (
            <img src={project.image} className="project-image" alt="" loading="lazy" />
          );

          return (
            <article className="project" key={`${project.name}-${index}`}>
              <div className="project-header">
                <h3>{project.name}</h3>
                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Live preview: ${project.name}`}
                  >
                    <i className="fas fa-external-link-alt" aria-hidden />
                  </a>
                )}
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-media">
                {hasRepo ? (
                  <a
                    href={project.sourceCode}
                    className="project-image-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {image}
                  </a>
                ) : (
                  image
                )}
              </div>
              {project.tools?.length > 0 && (
                <ul className="project-tools">
                  {project.tools.map((item, toolIndex) => (
                    <li key={`${item}-${toolIndex}`}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
