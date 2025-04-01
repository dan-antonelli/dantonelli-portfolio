import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <>
      <section className="projects">
        <h2>Recent projects</h2>
        <ProjectCard
          title="Webshop"
          imagePath="/webshop.png"
          description="A webshop created with React."
        />
        <ProjectCard
          title="Tour agency"
          imagePath="/tour-agency.png"
          description="A tour agency website created with HTML, CSS and vanilla JS."
        />
      </section>
      <div className="more-projects">
        <a href="#">more projects</a>
      </div>
    </>
  );
}
