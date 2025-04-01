import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="container">
      <Link to="/" className="home" title="home">
        <img src="/home.png" alt="home" />
      </Link>
      <div className="nav-link-container">
        <Link to="/projects" className="main-link" title="projects">
          projects
        </Link>
        <Link to="/about" className="main-link" title="about">
          about
        </Link>
      </div>
    </nav>
  );
}
