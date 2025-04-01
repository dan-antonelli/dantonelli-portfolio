import './App.css';
import Background from './Background';
import Navbar from './Navbar';
import Main from './MainContent';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
