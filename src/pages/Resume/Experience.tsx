import { PropsWithChildren, ReactElement } from 'react';
import Post from '../../components/Post/Post';

import { formatDateString } from '../../utils/formatDate';

import jobs from '../../assets/data/resume/experience';

interface JobProps {
  name: string;
  position: string;
  url: string;
  startDate: string;
  summary: ReactElement;
  highlights: ReactElement[];
  endDate?: string | undefined;
}

function Job({ data }: PropsWithChildren<{ data: JobProps }>) {
  const { name, position, url, startDate, endDate, summary, highlights } = data;
  return (
    <article className="job-container">
      <header>
        <h4>
          {url.length === 0 ? name : <a href={url}>{name}</a>}
          {position.length !== 0 ? ` - ${position}` : ''}
        </h4>
        <p className="daterange">
          {' '}
          {formatDateString(startDate)} -{' '}
          {(endDate && formatDateString(endDate)) || 'PRESENT'}
        </p>
      </header>
      <div className="job-summary">{summary && summary}</div>
      <ul className="job-highlights">
        {highlights.map((highlight) => {
          return <li key={Math.random()}>{highlight}</li>;
        })}
      </ul>
    </article>
  );
}

function Experience() {
  return (
    <Post.Section divider="down" id="experience">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#experience" className="link">
            experience
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        {jobs.map((job) => {
          return <Job key={job.name} data={job} />;
        })}
      </Post.Body>
    </Post.Section>
  );
}

export default Experience;
