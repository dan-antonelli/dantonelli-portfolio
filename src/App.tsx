import './App.css';

function App() {
  return (
    <div className="flex flex-col">
      <nav className="flex flex-jc-sb flex-ai-center mt-1 mb-6">
        <img src="/home.png" alt="home" />
        <div className="flex flex-gap-1 fit-content">
          <a href="#" className="a-btn font-md p-1">
            projects
          </a>
          <a href="#" className="a-btn font-md p-1">
            blog
          </a>
          <a href="#" className="a-btn font-md p-1">
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
