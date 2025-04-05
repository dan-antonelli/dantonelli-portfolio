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
      <div className="job-date">{date}</div>
      <div className="job-title">
        <h3>
          {position}
          <span className="workplace-wrapper">
            <span className="workplace-at">@</span>
            <a href={workplaceUrl} target="_blank" rel="noopener noreferrer" className="job-anchor">
              {workplace}
            </a>
          </span>
        </h3>
      </div>
      <div></div>
    </article>
  );
}
