import Contact from './Contact';
import Hero from './Hero';

export default function Main() {
  return (
    <main className="container">
      <Hero />
      <section className="projects">
        <h2>Recent projects</h2>
        <article className="project">
          <div className="project-title">
            <h3>Webshop</h3>
          </div>
          <div className="project-image-container">
            <img src="/webshop.png" alt="webshop project" className="project-image" />
          </div>
          <div className="project-description-container">
            <p className="project-description">A webshop created with React.</p>
            <div className="project-links">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
                className="project-anchor"
              >
                project site
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
      </section>
      <Contact />
    </main>
  );
}
