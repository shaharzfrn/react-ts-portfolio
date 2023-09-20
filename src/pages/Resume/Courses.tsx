import Section from '../../components/Section/Section';

import courses from '../../assets/data/resume/courses';

interface CourseProps {
  title: string;
  name: string;
  link: string;
}

function Course({ title, name, link }: CourseProps) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="grid | border-bottom-0"
      >
        <p>
          <span className="fs-400 fw-bold">{title}</span> :{name}
        </p>
      </a>
    </li>
  );
}

function Courses() {
  return (
    <Section id="courses">
      <Section.Header>
        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 text-center margin-block-end-4 tracking-wide">
          <a href="#education" className="border-bottom-0">
            courses
          </a>
        </h1>
      </Section.Header>
      <ul>
        {courses.map((course) => {
          const { title, name, link } = course;
          return <Course key={title} title={title} name={name} link={link} />;
        })}
      </ul>
    </Section>
  );
}

export default Courses;
