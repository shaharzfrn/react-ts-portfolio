import Post from '../../components/Post/Post';

import education from '../../assets/data/resume/education';

interface DagreeProps {
  school: string;
  degree: string;
  year: number;
  link: string | undefined;
}

function Degree({ school, degree, link, year }: DagreeProps) {
  return (
    <article className="degree-container">
      <header>
        <h4 className="h4 degree">{degree}</h4>
        <p className="school">
          {link !== undefined ? <a href={link}>{school}</a> : school}. {year}
        </p>
      </header>
    </article>
  );
}

function Education() {
  return (
    <Post.Section divider="down" id="education">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#education" className="link">
            education
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        {education.map((item) => {
          const { school, degree, link, year } = item;
          return (
            <Degree
              key={school}
              school={school}
              degree={degree}
              link={link}
              year={year}
            />
          );
        })}
      </Post.Body>
    </Post.Section>
  );
}

export default Education;
