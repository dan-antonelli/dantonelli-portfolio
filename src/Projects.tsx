import { Link } from 'react-router-dom';
import { projects } from './data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <h2>Recent projects</h2>
        {projects.map(({ title, imagePath, description }) => (
          <ProjectCard title={title} imagePath={imagePath} description={description} />
        ))}
      </section>
      <div className="more-projects">
        <Link to="/projects" className="main-link" title="more projects">
          more projects
        </Link>
      </div>
    </>
  );
}
