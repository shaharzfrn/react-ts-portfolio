import { useState, PropsWithChildren } from 'react';
import Post from '../../components/Post/Post';

import { skills, categories, colors } from '../../assets/data/resume/skills';

interface SkillBarProps {
  title: string;
  competency: number; // out of 5
}

function SkillBar({ title, competency }: SkillBarProps) {
  const barStyle = {
    width: `${String(Math.max((competency / 5.0) * 100.0, 0))}%`,
    backgroundColor: colors[competency - 1],
  };

  return (
    <div className="skillbar">
      <div className="skillbar-title">
        <span>{title}</span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skillbar-percent">{competency} / 5</div>
    </div>
  );
}

interface SkillsBarsProps {
  filterCategory: string;
}

function SkillsBars({ filterCategory }: PropsWithChildren<SkillsBarsProps>) {
  return (
    <div>
      {skills
        .filter((skill) => {
          return (
            filterCategory === 'All' || skill.category.includes(filterCategory)
          );
        })
        .map((skill) => {
          const { title, competency } = skill;
          return <SkillBar key={title} title={title} competency={competency} />;
        })}
    </div>
  );
}

interface CategoriesProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

function Categories({ setFilter }: PropsWithChildren<CategoriesProps>) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.getAttribute('value'));
    setFilter(String(e.currentTarget.getAttribute('value')));
  };

  return (
    <div className="filter-container align-center">
      {['All', ...categories].map((cat) => {
        return (
          <button
            type="button"
            key={cat}
            onClick={onClick}
            value={cat}
            className="skill-filter"
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

function Skills() {
  const [filter, setFilter] = useState<string>('All');
  return (
    <Post.Section divider="down" id="skills">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#skills" className="link">
            skills{filter === 'All' ? '' : ` - ${filter}`}
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        <div className="skill-container">
          <Categories setFilter={setFilter} />
          <SkillsBars filterCategory={filter} />
        </div>
      </Post.Body>
    </Post.Section>
  );
}

export default Skills;
