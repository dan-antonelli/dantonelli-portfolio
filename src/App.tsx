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
          <a href="#">projects</a>
          <a href="#">about</a>
        </div>
      </nav>
      <main className="container">
        <section className="intro-container">
          <div className="title-container">
            <h1>Daniel Antonelli</h1>
          </div>
          <div className="info">
            <p>
              I'm
              <a
                href="https://www.linkedin.com/in/dan-antonelli/"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
                className="info-anchor"
              >
                Daniel
              </a>
              , a frontend developer @
              <a
                href="https://www.epam.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="epam"
                className="info-anchor"
              >
                EPAM
              </a>
              with over seven years of experience in building web applications. I specialize in
              React but have worked with a range of technologies, from Java to JavaScript.
            </p>
            <p>
              I'm passionate about solving challenging problems, communicating complex ideas
              clearly, and understanding customer needs to create exceptional user experiences.
            </p>
            <p>
              Check out my
              <a href="#" title="projects" className="info-anchor">
                projects
              </a>
              and
              <a href="#" title="cv" className="info-anchor">
                résumé
              </a>
              !
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
              <a href="#" title="email" onClick={handleEmailClick} className="contact-anchor">
                danielanonelli.official@gmail.com
              </a>
            </p>
            <div className="social-contact">
              <a
                href="https://www.linkedin.com/in/dan-antonelli/"
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin"
                className="social-contact-anchor"
              >
                linkedin
              </a>
              <a
                href="https://github.com/dan-antonelli"
                target="_blank"
                rel="noopener noreferrer"
                title="github"
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
