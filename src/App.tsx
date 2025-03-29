import './App.css';

function App() {
  return (
    <div className="container">
      <nav>
        <a href="#" className="home">
          <img src="/home.png" alt="home" />
        </a>
        <div className="nav-link-container">
          <a href="#">projects</a>
          <a href="#">blog</a>
          <a href="#">about</a>
        </div>
      </nav>
      <div className="title-container">
        <h1>Daniel Antonelli</h1>
      </div>
    </div>
  );
}

export default App;
