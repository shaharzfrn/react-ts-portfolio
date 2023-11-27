import randomColor from 'randomcolor';

const projects = [
  {
    title: 'React Portfolio',
    link: 'https://github.com/shaharzfrn/react-ts-portfolio',
    image: '/images/portfolio.png',
    description: 'Simple portfolio website',
    tags: ['React', 'TypeScript', 'SCSS'],
  },

  {
    title: 'Graphics Engine',
    link: 'https://github.com/shaharzfrn/GraphicsEngine',
    image:
      'https://github.com/shaharzfrn/GraphicsEngine/blob/main/screenshots/screenshot-base.png?raw=true',
    description: 'Very basic graphics engine write in C/C++',
    tags: ['C/C++', 'wxWidgets'],
  },

  {
    title: 'Trash Detector',
    link: 'https://github.com/shaharzfrn/Taco-Trash-Detector',
    image:
      'https://github.com/shaharzfrn/Taco-Trash-Detector/raw/main/trash-detection-best-results/adam/test_batch0_pred.jpg?raw=true',
    description: 'Yolov7 model tained to detect trash',
    tags: ['Python', 'YOLOv7'],
  },
].map((project) => ({
  ...project,
  tags: project.tags.map((tag) => ({
    title: tag,
    color: randomColor({
      luminosity: 'light',
      seed: `${tag.toLocaleLowerCase()}`,
    }),
  })),
}));

export default projects;
