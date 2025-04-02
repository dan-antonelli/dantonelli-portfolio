import { Link } from 'react-router-dom';
import { useScrollToSection } from '@hooks/useScrollToSection';

export default function Hero() {
  const scrollToSection = useScrollToSection();

  const handleProjectsClick = (e: React.MouseEvent) => {
    scrollToSection('projects', e);
  };

  return (
    <section className="intro-container">
      <div className="title-container">
        <h1>Daniel Antonelli</h1>
      </div>
      <div className="info">
        <p>
          I'm
          <a
            href="https://www.linkedin.com/in/dan-antonelli/"
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
            className="info-anchor"
          >
            Daniel
          </a>
          , a frontend developer @
          <a
            href="https://www.epam.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="epam"
            className="info-anchor"
          >
            EPAM
          </a>
          with over seven years of experience in building web applications. I specialize in React
          but have worked with a range of technologies, from Java to JavaScript.
        </p>
        <p>
          I'm passionate about solving challenging problems, communicating complex ideas clearly,
          and understanding customer needs to create exceptional user experiences.
        </p>
        <p>
          Check out my
          <Link
            to="#projects"
            title="projects"
            className="info-anchor"
            onClick={handleProjectsClick}
          >
            projects
          </Link>
          and
          <Link to="/cv" title="cv" className="info-anchor">
            résumé
          </Link>
          !
        </p>
      </div>
      <div className="avatar">
        <img src="/avatar.jpg" alt="Daniel Antonelli, frontend developer portrait" />
      </div>
    </section>
  );
}
