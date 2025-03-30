import Contact from './Contact';
import Hero from './Hero';

export default function Main() {
  return (
    <main className="container">
      <Hero />
      <section className="projects">
        <h2>Recent projects</h2>
        <a
          href=""
          //   target="_blank"
          rel="noopener noreferrer"
          title="webshop project"
          className="project-anchor"
        >
          <article className="project">
            <div className="project-title">
              <h3>Webshop</h3>
            </div>
            <div className="project-image-container">
              <img src="/webshop.png" alt="webshop project" className="project-image" />
            </div>
            <p className="project-description">A webshop created with React.</p>
          </article>
        </a>
      </section>
      <Contact />
    </main>
  );
}
