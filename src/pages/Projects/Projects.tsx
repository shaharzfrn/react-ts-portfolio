import { Link } from 'react-router-dom';

import Page from '../../layouts/Page';
import Section from '../../components/Section/Section';

import projects, { ProjectProps } from '../../assets/data/projects';
import TagsList from '../../components/TabsList/TagsList';

function Project({ title, link, image, description, tags }: ProjectProps) {
  return (
    <div className="card | bg-primary-100">
      <Section>
        <Section.Header>
          <h2 className="card__heading fw-bold clr-neutral-900 fs-700 padding-block-end-0 margin-block-end-1">
            <a href={link} className="border-0">
              {title}
            </a>
          </h2>
          <TagsList tags={tags} />
        </Section.Header>
        <p className="padding-block-start-2">{description}</p>
        {image ? <img src={image} alt="" /> : null}
      </Section>
    </div>
  );
}

function Projects() {
  // TODO:
  // 1) make each project subgrid of the projects grid
  // 2) add 'Learn more...' at the end of each project, place it at the bottom of the card
  return (
    <Page title="Projects" description="projects, personal projects">
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
            const { title, link, image, description, tags } = project;
            return (
              <Project
                key={title}
                title={title}
                link={link}
                image={image}
                description={description}
                tags={tags}
              />
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
