const skills = [
  //
  {
    title: 'Python',
    competency: 5, // out of 5
    category: ['Languages'],
  },
  //
  {
    title: 'C/C++',
    competency: 5, // out of 5
    category: ['Languages'],
  },
  //
  {
    title: 'JavaScript',
    competency: 5, // out of 5
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'TypeScript',
    competency: 4.5,
    category: ['Web Development', 'Languages', 'TypeScript'],
  },
  //
  {
    title: 'Java/FX',
    competency: 5, // out of 5
    category: ['Languages'],
  },

  //
  {
    title: 'React',
    competency: 4, // out of 5
    category: ['Javascript', 'TypeScript', 'Web Development'],
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
    title: 'Numpy',
    competency: 3.5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Panada',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
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
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Neo4j',
    competency: 2.5,
    category: ['Web Development', 'Databases'],
  },

  //
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
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
