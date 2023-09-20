import { useState } from 'react';
import { skills, categories, colors } from '../../assets/data/resume/skills';
import GradientCircleProgressbar from '../../components/Progressbar/GradientCircleProgressbar';
import Section from '../../components/Section/Section';

interface SkillProps {
  title: string;
  competency: number; // out of 5
}

function Skill({ title, competency }: SkillProps) {
  return (
    <div className="card bg-neutral-000 items-center">
      <GradientCircleProgressbar
        percentage={(competency / 5) * 100}
        text={`${competency} / 5`}
        width={150}
        primaryColor={[
          colors[Math.max(Math.floor(competency - 1), 0)],
          colors[Math.max(Math.floor(competency - 1), 0)],
        ]}
      />
      <p className="text-center">{title}</p>
    </div>
  );
}

function Skills() {
  const [category, setCategory] = useState('All');

  return (
    <Section id="skills">
      <Section.Header>
        <h1 className="text-uppercase fw-bold clr-neutral-900 fs-500 text-center margin-block-end-4 tracking-wide">
          <a href="#education" className="border-bottom-0 ">
            skills
          </a>
          {category !== 'All' ? ` - ${category}` : null}
          <p className="fs-100 fw-regular text-regular clr-neutral-700">
            {' '}
            [ *As honest as I can ]{' '}
          </p>
        </h1>
        <div className="text-center fs-100 margin-block-end-4">
          <p>
            <span className="fw-bold">Note:</span> Everyone seems to have one of
            those skills bars, I think it&apos;s silly.
          </p>
        </div>
        <div className="flex-group mx-auto">
          {['All', ...categories].map((cat) => {
            return (
              <button
                key={cat}
                type="button"
                className="button fs-100 bg-neutral-200"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Section.Header>
      <div className="flex-group mx-auto">
        {skills
          .filter(
            (skill) => category === 'All' || skill.category.includes(category)
          )
          .map((skill) => {
            const { title, competency } = skill;
            return <Skill key={title} title={title} competency={competency} />;
          })}
      </div>
    </Section>
  );
}

export default Skills;
