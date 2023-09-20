import { Link } from 'react-router-dom';
import Page from '../../layouts/Page';

function Projects() {
  return (
    <Page title="Projects" description="">
      <Page.Title>
        <Link to="/projects">Projects</Link>
      </Page.Title>
      <Page.Body>
        <div className="border-1 border-neutral-400 ">asdasd</div>
      </Page.Body>
    </Page>
  );
}

export default Projects;
