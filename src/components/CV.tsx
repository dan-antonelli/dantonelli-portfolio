import { jobs } from '@/data/cv';
import CVCard from './CVCard';

export default function CV() {
  return (
    <main className="container">
      <section className="cv-page">
        <h1>Résumé</h1>
        {jobs.map((job) => (
          <CVCard key={job.id} {...job} />
        ))}
      </section>
    </main>
  );
}
