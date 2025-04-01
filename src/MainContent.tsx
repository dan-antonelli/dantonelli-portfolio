import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';

export default function Main() {
  return (
    <main className="container">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
