import { Link } from 'react-router-dom';
import { projects } from './data/projects';
import ProjectCard from './ProjectCard';

interface Props {
  isPreview: boolean;
}

export default function Projects({ isPreview }: Props) {
  const displayedProjects = isPreview ? projects.slice(0, 3) : projects;

  return (
    <>
      <section id="projects" className="projects">
        <h2>Recent projects</h2>
        {displayedProjects.map(({ title, imagePath, description }) => (
          <ProjectCard title={title} imagePath={imagePath} description={description} />
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
