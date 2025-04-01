import { ReactNode } from 'react';
import './App.css';
import Background from './Background';
import Navbar from './Navbar';
import Main from './MainContent';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <Background />
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Main />
            </DefaultLayout>
          }
        />
        <Route path="/projects" element={<PageNotFound />} />
        <Route path="/about" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
