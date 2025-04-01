import { Link } from 'react-router-dom';

interface Props {
  title: string;
  imagePath: string;
  description: string;
}

export default function ProjectCard({ title, imagePath, description }: Props) {
  return (
    <article className="project">
      <div className="project-title">
        <h3>{title}</h3>
      </div>
      <div className="project-image-container">
        <img src={imagePath} alt={`${title}-project`} className="project-image" />
      </div>
      <div className="project-description-container">
        <p className="project-description">{description}</p>
        <div className="project-links">
          <Link
            to="/project-site-url"
            target="_blank"
            rel="noopener noreferrer"
            title="site"
            className="project-anchor"
          >
            site
          </Link>
          <Link
            to="/project-github-url"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
            className="project-anchor"
          >
            github
          </Link>
        </div>
      </div>
    </article>
  );
}
