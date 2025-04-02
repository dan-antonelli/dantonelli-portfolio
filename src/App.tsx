import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, ProjectsPage, PageNotFoundPage, CVPage } from '@pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
