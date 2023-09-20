import Section from '../../components/Section/Section';

import degrees from '../../assets/data/resume/education';

interface DagreeProps {
  school: string;
  degree: string;
  year: number;
  link: string | undefined;
}

function Degree({ school, degree, link, year }: DagreeProps) {
  return (
    <article className="">
      <header className="">
        <p className="clr-neutral-900 fw-semi-bold">{degree}</p>
        <p className="margin-block-end-4 fs-100">
          {link !== undefined ? <a href={link}>{school}</a> : school}. {year}
        </p>
      </header>
    </article>
  );
}

function Education() {
  return (
    <Section id="education">
      <Section.Header>
        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 text-center margin-block-end-4 tracking-wide">
          <a href="#education" className="border-bottom-0">
            education
          </a>
        </h1>
      </Section.Header>
      {degrees.map((item: DagreeProps) => {
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
    </Section>
  );
}

export default Education;
