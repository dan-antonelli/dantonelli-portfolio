import { useCopyToClipboard } from '@hooks/useCopyToClipboard';

export default function ContactCard() {
  const email = 'danielanonelli.official@gmail.com';
  const { showCopied, copyToClipboard } = useCopyToClipboard();

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    copyToClipboard(email, e);
  };

  return (
    <section id="contact" className="contact-container">
      <div id="contact-box" className="contact-box">
        <p>
          Contact me at
          <a href="#" title="email" onClick={handleEmailClick} className="contact-anchor">
            danielantonelli.official@gmail.com
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
