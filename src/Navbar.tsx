export default function Navbar() {
  return (
    <nav className="container">
      <a href="#" className="home" title="home">
        <img src="/home.png" alt="home" />
      </a>
      <div className="nav-link-container">
        <a href="#" title="projects" className="main-link">
          projects
        </a>
        <a href="#" title="about" className="main-link">
          about
        </a>
      </div>
    </nav>
  );
}
