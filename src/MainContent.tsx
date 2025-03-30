import Contact from './Contact';
import Hero from './Hero';

export default function Main() {
  return (
    <main className="container">
      <Hero />
      <section className="projects">
        <h2>Recent projects</h2>
        <article className="project">
          <h3>Webshop</h3>
          <p>A webshop created with React.</p>
        </article>
      </section>
      <Contact />
    </main>
  );
}
