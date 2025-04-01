import { Link } from 'react-router-dom';
import { projects } from './data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  isPreview: boolean;
}

export default function Projects({ isPreview }: Props) {
  const title = isPreview ? 'Projects' : 'Recent projects';
  const displayedProjects = isPreview ? projects.slice(0, 3) : projects;

  return (
    <>
      <section id="projects" className="projects">
        <h2>{title}</h2>
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
      {isPreview && (
        <div className="more-projects">
          <Link to="/projects" className="main-link" title="more projects">
            more projects
          </Link>
        </div>
      )}
    </>
  );
}
