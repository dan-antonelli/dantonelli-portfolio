import './App.css';

function App() {
  return (
    <div className="container">
      <nav className="flex flex-jc-sb flex-ai-center mt-1 mb-6 w-100">
        <a href="#">
          <img src="/home.png" alt="home" />
        </a>
        <div className="flex flex-gap-1 fit-content">
          <a href="#" className="a-btn font-md">
            projects
          </a>
          <a href="#" className="a-btn font-md">
            blog
          </a>
          <a href="#" className="a-btn font-md">
            about
          </a>
        </div>
      </nav>
      <div className="text-center">
        <h1>Daniel Antonelli</h1>
      </div>
    </div>
  );
}

export default App;
