import { Link } from 'react-router-dom';
import { useScrollToContact } from '@/hooks/useScrollToContact';

export default function Navbar() {
  const { handleContactClick } = useScrollToContact();

  return (
    <nav className="container">
      <Link to="/" className="home" title="home">
        <img src="/home.png" alt="home" />
      </Link>
      <div className="nav-link-container">
        <Link to="/projects" className="button" title="projects">
          projects
        </Link>
        <Link to="/cv" className="button" title="cv">
          résumé
        </Link>
        <a href="#contact" className="button" title="contact" onClick={handleContactClick}>
          contact
        </a>
      </div>
    </nav>
  );
}
