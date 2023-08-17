import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';

function Projects() {
  return (
    <Page title="" description="">
      <Page.Header>
        <h2 className="h2">
          <Link to="/projects" className="link">
            My Projects
          </Link>
        </h2>
        <p>
          here are some of my chosen projects. you can see all of them on{' '}
          <a href="https://github.com/shaharzfrn">github</a>
        </p>
      </Page.Header>
      {/* {data &&
        data.map((proj) => {
          return <Project key={proj.title} project={proj} />;
        })} */}
    </Page>
  );
}

export default Projects;