import { useTextFormatter } from '@/hooks/useTextFormatter';

interface Props {
  position: string;
  workplace: string;
  workplaceUrl: string;
  location: 'On-site' | 'Hybrid' | 'Remote';
  date: string;
  city: string;
  country: string;
  summary: string;
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
}: Props) {
  const { formatText } = useTextFormatter();

  return (
    <article className="job">
      <div className="job-date">{date}</div>
      <div className="job-title">
        <h3>
          {position}
          <span className="workplace-wrapper">
            <span className="workplace-at">@</span>
            <a
              href={workplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="job-anchor"
              title={workplace}
            >
              {workplace}
            </a>
          </span>
        </h3>
      </div>
      <div className="job-meta">
        <p>{`${location} | ${city} @ ${country}`}</p>
      </div>
      <div className="job-summary">
        <p>{formatText(summary)}</p>
      </div>
      <div></div>
    </article>
  );
}
