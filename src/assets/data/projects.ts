import { formatDate } from '../../utils/formatDate';

const data = [
  {
    title: 'React Portfolio',
    link: 'https://github.com/shaharzfrn/react-ts-portfolio',
    lastUpdateUrl: 'https://api.github.com/repos/shaharzfrn/react-ts-portfolio',
    subtitle: '',
    image: '/images/scotland.jpg',
    date: '',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, pariatur quae sequi alias illum quisquam odit temporibus quis labore, doloribus repellendus commodi illo recusandae, nobis architecto amet sunt neque est?',
    tags: [],
    lastUpdate: (fetchData: Record<string, string>) => {
      return fetchData.pushed_at
        ? formatDate(fetchData.pushed_at)
        : 'Not Available';
    },
  },

  {
    title: 'Github Page',
    link: 'https://github.com/shaharzfrn/shaharzfrn.github.io',
    subtitle: '',
    image: '/images/scotland_2.jpg',
    date: '',
    desc: 'project description',
    tags: ['typescript'],
    lastUpdate: (fetchData: Record<string, string>) => {
      return fetchData.pushed_at
        ? formatDate(fetchData.pushed_at)
        : 'Not Available';
    },
  },

  {
    title: 'Github Page',
    link: 'https://github.com/shaharzfrn/shaharzfrn.github.io',
    subtitle: '',
    image: '/images/scotland_2.jpg',
    date: '',
    desc: 'project description',
    tags: ['typescript'],
    lastUpdate: (fetchData: Record<string, string>) => {
      return fetchData.pushed_at
        ? formatDate(fetchData.pushed_at)
        : 'Not Available';
    },
  },

  // https://github.com/shaharzfrn/GraphicsEngine
];

export default data;
