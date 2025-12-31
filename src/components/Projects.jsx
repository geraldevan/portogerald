import { projectsData } from '../data/projects';

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">My work</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projectsData.map(project => (
                        <div key={project.id} className="project-card glass-card">
                            <div className="project-tag">{project.tag}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <span className="project-date">{project.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
