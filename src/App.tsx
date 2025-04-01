import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFoundPage from './pages/PageNotFoundPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<PageNotFoundPage />} />
        <Route path="/about" element={<PageNotFoundPage />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
