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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            title="github"
            className="project-anchor"
          >
            site
          </a>
          <a
            href="#"
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
