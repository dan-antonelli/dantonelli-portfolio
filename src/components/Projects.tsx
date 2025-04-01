import { Link } from 'react-router-dom';
import { projects } from '@data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  isPreview: boolean;
}

export default function Projects({ isPreview }: Props) {
  const title = isPreview ? 'Recent projects' : 'Projects';
  const displayedProjects = isPreview ? projects.slice(0, 3) : projects;

  return (
    <>
      <section id="projects" className={isPreview ? 'projects' : 'projects-page'}>
        {isPreview ? <h2>{title}</h2> : <h1>{title}</h1>}
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
