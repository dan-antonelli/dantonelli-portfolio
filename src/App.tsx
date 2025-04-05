import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage, ProjectsPage, PageNotFoundPage, CVPage } from '@pages/index';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
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
