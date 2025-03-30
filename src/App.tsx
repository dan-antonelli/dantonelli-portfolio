import './App.css';
import Background from './Background';
import Navbar from './Navbar';
import Hero from './Hero';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <Hero />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
