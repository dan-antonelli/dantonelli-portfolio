import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <section className="not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oh no! It looks like the page you're looking for doesn't exist.</p>
      <Link to="/" className="main-link">
        Return to Home
      </Link>
    </section>
  );
}
