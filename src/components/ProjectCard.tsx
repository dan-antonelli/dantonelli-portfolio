interface Props {
  title: string;
  imagePath: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  imagePath,
  description,
  projectUrl,
  githubUrl,
}: Props) {
  return (
    <article className="project">
      <div className="project-title">
        <h3>{title}</h3>
      </div>
      <div className="project-image-container">
        <a
          href={projectUrl ? projectUrl : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-anchor"
        >
          <img src={imagePath} alt={`${title}-project`} className="project-image" />
        </a>
      </div>
      <div className="project-description-container">
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="site"
            className="project-anchor"
          >
            site
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="github"
            className="project-anchor"
          >
            github
          </a>
        </div>
      </div>
    </article>
  );
}
