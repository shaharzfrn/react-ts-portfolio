import { Link } from 'react-router-dom';
import Page from '../../layouts/Page';
// import Section from '../../components/Section/Section';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Courses from './Courses';
import Extra from './Extra';

const SECTIONS = ['education', 'experience', 'skills', 'courses', 'extra'];

function Resume() {
  return (
    <Page title="Resume" description="Resume, skills, education, experience">
      <Page.Title>
        <Link to="/resume">resume</Link>
        <ul className="bullet-list | flex-group | fs-400 ">
          {SECTIONS.map((section) => {
            return (
              <li key={section}>
                <a href={`#${section}`} className="border-bottom-0">
                  {section}
                </a>
              </li>
            );
          })}
        </ul>
      </Page.Title>
      <Page.Body>
        <div className="flow">
          <Education />
          <Experience />
          <Skills />
          <Courses />
          <Extra />
        </div>
      </Page.Body>
      <slot />
    </Page>
  );
}

export default Resume;
