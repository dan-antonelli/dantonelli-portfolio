import { Link } from 'react-router-dom';

export default function Navbar() {
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
      </div>
    </nav>
  );
}
