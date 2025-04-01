import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section className="projects">
        <h2>Recent projects</h2>
        <ProjectCard
          title="Webshop"
          imagePath="/webshop.png"
          description="A webshop built with React."
        />
        <ProjectCard
          title="Tour agency"
          imagePath="/tour-agency.png"
          description="A tour agency website created with HTML, CSS and vanilla JS."
        />
        <ProjectCard
          title="Jobs dashboard"
          imagePath="/jobs.png"
          description="A job application tracker dashboard built with React."
        />
      </section>
      <div className="more-projects">
        <a href="#" title="more projects" className="main-link">
          more projects
        </a>
      </div>
    </>
  );
}
