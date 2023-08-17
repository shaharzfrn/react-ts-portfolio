import { ReactElement } from 'react';
import Post from '../../components/Post/Post';

import { formatDateString } from '../../utils/formatDate';

import jobs from '../../assets/data/resume/experience';

interface JobProps {
  name: string;
  position: string;
  url: string;
  startDate: string;
  summary: ReactElement;
  highlights: string[];
  endDate: string | undefined;
}
function Job({
  name,
  position,
  url,
  startDate,
  endDate,
  summary,
  highlights,
}: JobProps) {
  return (
    <article className="jobs-container">
      <header>
        <h4>
          <a href={url}>{name}</a> - {position}
        </h4>
        <p className="daterange">
          {' '}
          {formatDateString(startDate)} -{' '}
          {(endDate && formatDateString(endDate)) || 'PRESENT'}
        </p>
      </header>
      {summary}
      <ul>
        {highlights.map((highlight) => {
          return <li key={highlight}>{highlight}</li>;
        })}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <Post.Section divider="down">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#experience" className="link">
            experience
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        {jobs.map((job) => {
          const {
            name,
            position,
            url,
            startDate,
            endDate,
            summary,
            highlights,
          } = job as JobProps;

          return (
            <Job
              key={name}
              name={name}
              position={position}
              url={url}
              startDate={startDate}
              endDate={endDate}
              summary={summary}
              highlights={highlights}
            />
          );
        })}
      </Post.Body>
    </Post.Section>
  );
}

export default Experience;
