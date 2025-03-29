import './App.css';
import Background from './Background';

function App() {
  return (
    <>
      <Background />
      <main className="container">
        <nav>
          <a href="#" className="home" title="home">
            <img src="/home.png" alt="home" />
          </a>
          <div className="nav-link-container">
            <a href="#">about</a>
            <a href="#">projects</a>
            <a href="#">blog</a>
          </div>
        </nav>
        <section className="title-container">
          <h1>Daniel Antonelli</h1>
        </section>
      </main>
    </>
  );
}

export default App;
