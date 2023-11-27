import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Section from '../../components/Section/Section';

import projects from '../../assets/data/projects';
import TagsList from '../../components/TabsList/TagsList';

function Projects() {
  return (
    <Page title="Projects" description="">
      <Page.Title>
        <Link to="/projects">Projects</Link>
        <p>
          here are some of my <span className="fw-bold">personal</span>{' '}
          projects, <span className="fw-bold">ALL</span> of them are available
          on my <a href="https://github.com/shaharzfrn">github</a>
        </p>
      </Page.Title>
      <Page.Body>
        <div className="grid-auto-fit">
          {projects.map((project) => {
            return (
              <div key={project.title} className="card | bg-primary-100">
                <Section>
                  <Section.Header>
                    <h2 className="card__heading fw-bold clr-neutral-900 fs-700 padding-block-end-0 margin-block-end-1">
                      <a href={project.link} className="border-0">
                        {project.title}
                      </a>
                    </h2>
                    <TagsList tags={project.tags} />
                  </Section.Header>
                  <p className="padding-block-start-2">{project.description}</p>
                  {project.image ? <img src={project.image} alt="" /> : null}
                </Section>
              </div>
            );
          })}
        </div>
        <Section>
          <p>
            <span className="fw-bold">*</span> More project will be upload soon.
          </p>
        </Section>
      </Page.Body>
    </Page>
  );
}

export default Projects;
