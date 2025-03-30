import { useEffect, useState } from 'react';

export default function Contact() {
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
  );
}
