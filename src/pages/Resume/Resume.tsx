import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Post from '../../components/Post/Post';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Courses from './Courses';

function Resume() {
  return (
    <Page title="" description="">
      <Page.Header>
        <h2 className="h2">
          <Link to="/resume" className="link">
            Resume
          </Link>
        </h2>
        <div>
          <ul className="resume-menu">
            <li>
              <a href="#education">education</a>
            </li>
            <li>
              <a href="#skills">skills</a>
            </li>
          </ul>
        </div>
      </Page.Header>
      <Post>
        <Education />
        <Experience />
        <Skills />
        <Courses />
      </Post>
    </Page>
  );
}

export default Resume;
