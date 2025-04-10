const imagePathPrefix = '/projects';

interface Project {
  id: number;
  title: string;
  imagePath: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Web Shop',
    imagePath: `${imagePathPrefix}/webshop.png`,
    description: 'An e-commerce website built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/webshop',
  },
  {
    id: 2,
    title: 'Tour Agency',
    imagePath: `${imagePathPrefix}/tour-agency.png`,
    description:
      'A tour agency website built for a client using HTML, CSS, and vanilla JavaScript.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/find-your-ways',
  },
  {
    id: 3,
    title: 'Jobs Dashboard',
    imagePath: `${imagePathPrefix}/jobs.png`,
    description: 'A job application tracking dashboard built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/jobs',
  },
  {
    id: 4,
    title: 'Cocktail Finder',
    imagePath: `${imagePathPrefix}/cocktails.png`,
    description: 'An application built with React to help you find your favorite cocktail recipes.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/cocktails',
  },
  {
    id: 5,
    title: 'Tours Explorer',
    imagePath: `${imagePathPrefix}/tours.png`,
    description: 'A tour agency website built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/tours',
  },
  {
    id: 6,
    title: 'Restaurant Menu',
    imagePath: `${imagePathPrefix}/menu.png`,
    description: 'An interactive restaurant menu built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/menu',
  },
  {
    id: 7,
    title: 'Color Generator',
    imagePath: `${imagePathPrefix}/color-generator.png`,
    description: 'A color palette generator built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/color-generator',
  },
  {
    id: 8,
    title: 'Lorem Ipsum Generator',
    imagePath: `${imagePathPrefix}/lorem-ipsum.png`,
    description: 'A Lorem Ipsum text generator built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/lorem-ipsum',
  },
  {
    id: 9,
    title: 'Shopping Cart',
    imagePath: `${imagePathPrefix}/cart.png`,
    description: 'A shopping cart component for a fictional e-commerce site built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/cart',
  },
  {
    id: 10,
    title: 'To-Do Application',
    imagePath: `${imagePathPrefix}/todo.png`,
    description: 'A task management application built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/todos',
  },
  {
    id: 12,
    title: 'Sidebar and Modal',
    imagePath: `${imagePathPrefix}/sidebar-and-modal.png`,
    description: 'Interactive sidebar and modal components built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/sidebar-and-modal',
  },
  {
    id: 13,
    title: 'Carousel Component',
    imagePath: `${imagePathPrefix}/carousel.png`,
    description: 'An interactive carousel component built with React.',
    projectUrl: '',
    githubUrl: 'https://github.com/dan-antonelli/slider',
  },
];
