import { useEffect, useState } from 'react';
import './App.css';
import Background from './Background';

function App() {
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    if (showCopied) {
      const handleDocumentClick = () => {
        setShowCopied(false);
      };

      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }
  }, [showCopied]);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const email = 'danielanonelli.official@gmail.com';

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setShowCopied(true);

        e.stopPropagation();
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <>
      <Background />
      <nav className="container">
        <a href="#" className="home" title="home">
          <img src="/home.png" alt="home" />
        </a>
        <div className="nav-link-container">
          <a href="#">about</a>
          <a href="#">projects</a>
          <a href="#">blog</a>
        </div>
      </nav>
      <main className="container">
        <section className="intro-container">
          <div className="title-container">
            <h1>Daniel Antonelli</h1>
          </div>
          <div className="info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla risus mauris,
              in posuere dolor cursus at. Quisque augue augue, fringilla ut ipsum ut, elementum
              vehicula lacus. Quisque dui purus, faucibus et urna ac, viverra dignissim justo.
              Mauris ultrices euismod diam, in pulvinar nunc ultricies eu. Nunc efficitur eleifend
              accumsan. Pellentesque dapibus mauris vitae tortor semper iaculis. Morbi nisi nisl,
              pellentesque et sem non, tempus imperdiet turpis. Morbi libero enim, congue ac nibh
              quis, dapibus ornare dui. In laoreet, neque eu molestie maximus, lectus urna feugiat
              quam, at consectetur mauris diam ac sapien. Pellentesque mollis eros at justo pretium,
              tempor maximus est vehicula.
            </p>
          </div>
          <div className="avatar">
            <img src="/avatar.jpg" alt="avatar" />
          </div>
        </section>
        <section className="contact-container">
          <div className="contact-box">
            <p>
              Contact me at
              <a href="#" onClick={handleEmailClick} className="contact-anchor">
                danielanonelli.official@gmail.com
              </a>
            </p>
            <div className="social-contact">
              <a
                href="https://www.linkedin.com/in/dan-antonelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-contact-anchor"
              >
                linkedin
              </a>
              <a
                href="https://github.com/dan-antonelli"
                target="_blank"
                rel="noopener noreferrer"
                className="social-contact-anchor"
              >
                github
              </a>
            </div>
            {showCopied && (
              <div className="copied-notification">
                <div>Copied</div>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Daniel Antonelli</p>
      </footer>
    </>
  );
}

export default App;
