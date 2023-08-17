import Post from '../../components/Post/Post';

import { skills, colors } from '../../assets/data/resume/skills';

interface SkillBarProps {
  title: string;
  competency: number; // out of 5
  category: string[];
}

function SkillBar({ title, competency, category }: SkillBarProps) {
  const barStyle = {
    width: `${String(Math.max((competency / 5.0) * 100.0, 0))}%`,
    backgroundColor: colors[competency - 1],
  };

  return (
    <div className="skillbar">
      <div className="skillbar-title">
        <span>
          {title} - {category}
        </span>
      </div>
      <div className="skillbar-bar" style={barStyle} />
      <div className="skillbar-percent">{competency} / 5</div>
    </div>
  );
}

function Skills() {
  return (
    <Post.Section divider="down">
      <Post.SectionHeader position="center">
        <h3 className="h3">
          <a href="#experience" className="link">
            skills
          </a>
        </h3>
      </Post.SectionHeader>
      <Post.Body>
        <div className="skill-container">
          {skills.map((skill) => {
            const { title, competency, category } = skill;
            return (
              <SkillBar
                key={title}
                title={title}
                competency={competency}
                category={category}
              />
            );
          })}
        </div>
      </Post.Body>
    </Post.Section>
  );
}

export default Skills;
