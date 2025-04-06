import ContactCard from './ContactCard';
import Hero from './Hero';
import Projects from './Projects';
import TechCard from './TechCard';

export default function Main() {
  return (
    <main className="container">
      <Hero />
      <TechCard />
      <Projects isPreview />
      <ContactCard />
    </main>
  );
}
