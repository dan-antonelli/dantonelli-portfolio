interface Props {
  position: string;
  workplace: string;
  workplaceUrl: string;
  location: 'On-site' | 'Hybrid' | 'Remote';
  date: string;
  city: string;
  country: string;
  summary: string;
  description: string[];
}

export default function CVCard({
  position,
  workplace,
  workplaceUrl,
  location,
  date,
  city,
  country,
  summary,
  description,
}: Props) {
  return (
    <article className="job">
      <div className="job-title">
        <h3>{position}</h3>
      </div>
      <div>
        <a
          href={`/${workplaceUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="project-image-anchor"
        />
      </div>
    </article>
  );
}
