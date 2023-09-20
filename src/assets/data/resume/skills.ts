const skills = [
  //
  {
    title: 'C/C++',
    competency: 5, // out of 5
    category: ['Languages'],
  },
  {
    title: 'OpenGL',
    competency: 4, // out of 5
    category: ['Languages', 'C/C++', 'Java'],
  },
  {
    title: 'Arduino',
    competency: 4, // out of 5
    category: ['Languages', 'C/C++'],
  },

  {
    title: 'Java/FX',
    competency: 5, // out of 5
    category: ['Languages'],
  },

  //
  {
    title: 'Python',
    competency: 5, // out of 5
    category: ['Languages'],
  },
  {
    title: 'Numpy',
    competency: 2.5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },

  //
  {
    title: 'Javascript',
    competency: 5, // out of 5
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 5,
    category: ['Web Development', 'Databases', 'Languages'],
  },

  //
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = ['#FE938C', '#f6d0b1', '#ddf093', '#93BEDF', '#90e39a'];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort();
export { skills, categories, colors };
