import useFetchWithCallback from '../../hooks/useFetchWithCallback';

import Post from '../Post/Post';

export interface IProject {
  title: string;
  subtitle: string;
  date: string;
  desc: string;
  tags: string[];
  image?: string;
  link?: string;
  lastUpdateUrl?: string;
  lastUpdate?: (fetchData: any) => string;
}

interface ProjectProps {
  project: IProject;
}

const PUBLIC_URL = '';

function Project({ project }: ProjectProps) {
  const {
    data: date,
    error,
    loading,
  } = useFetchWithCallback<string>(
    project.lastUpdateUrl,
    {},
    project.lastUpdate
  );

  return (
    <Post>
      <header>
        <div className="title">
          <h2>
            <a target="_blank" href={project?.link} rel="noreferrer">
              {project?.title}
            </a>
          </h2>
          <p>
            last update:{' '}
            <span className="last-update">
              {loading && 'loading...'}
              {date && date}
            </span>
            {error?.message}
          </p>
          <p>{project.desc}</p>
        </div>
      </header>
      {project.image && (
        <img src={PUBLIC_URL + project.image} alt={project.subtitle} />
      )}
    </Post>
  );
}

export default Project;
