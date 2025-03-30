import './App.css';
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';
import Contact from './Contact';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <Hero />
        <Contact />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Daniel Antonelli</p>
      </footer>
    </>
  );
}

export default App;
