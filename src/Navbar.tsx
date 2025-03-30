export default function Navbar() {
  return (
    <nav className="container">
      <a href="#" className="home" title="home">
        <img src="/home.png" alt="home" />
      </a>
      <div className="nav-link-container">
        <a href="#">projects</a>
        <a href="#">about</a>
      </div>
    </nav>
  );
}
