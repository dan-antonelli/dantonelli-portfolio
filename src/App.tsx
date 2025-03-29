import './App.css';
import Background from './Background';

function App() {
  return (
    <div className="container">
      <Background />
      <nav>
        <a href="#" className="home">
          <img src="/home.png" alt="home" />
        </a>
        <div className="nav-link-container">
          <a href="#">about</a>
          <a href="#">projects</a>
          <a href="#">blog</a>
        </div>
      </nav>
      <div className="title-container">
        <h1>Daniel Antonelli</h1>
      </div>
    </div>
  );
}

export default App;
