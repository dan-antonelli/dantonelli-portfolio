const imagePathPrefix = '/projects';

interface Project {
  title: string;
  imagePath: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: 'Web Shop',
    imagePath: `${imagePathPrefix}/webshop.png`,
    description: 'An e-commerce website built with React.',
  },
  {
    title: 'Tour Agency',
    imagePath: `${imagePathPrefix}/tour-agency.png`,
    description:
      'A tour agency website built for a client using HTML, CSS, and vanilla JavaScript.',
  },
  {
    title: 'Jobs Dashboard',
    imagePath: `${imagePathPrefix}/jobs.png`,
    description: 'A job application tracking dashboard built with React.',
  },
  {
    title: 'Cocktail Finder',
    imagePath: `${imagePathPrefix}/cocktails.png`,
    description: 'An application built with React to help you find your favorite cocktail recipes.',
  },
  {
    title: 'Tours Explorer',
    imagePath: `${imagePathPrefix}/tours.png`,
    description: 'A tour agency website built with React.',
  },
  {
    title: 'Restaurant Menu',
    imagePath: `${imagePathPrefix}/menu.png`,
    description: 'An interactive restaurant menu built with React.',
  },
  {
    title: 'Color Generator',
    imagePath: `${imagePathPrefix}/color-generator.png`,
    description: 'A color palette generator built with React.',
  },
  {
    title: 'Lorem Ipsum Generator',
    imagePath: `${imagePathPrefix}/lorem-ipsum.png`,
    description: 'A Lorem Ipsum text generator built with React.',
  },
  {
    title: 'Shopping Cart',
    imagePath: `${imagePathPrefix}/cart.png`,
    description: 'A shopping cart component for a fictional e-commerce site built with React.',
  },
  {
    title: 'To-Do Application',
    imagePath: `${imagePathPrefix}/todo.png`,
    description: 'A task management application built with React.',
  },
  {
    title: 'Grocery List',
    imagePath: `${imagePathPrefix}/grocery-list.png`,
    description: 'An interactive grocery list application built with React.',
  },
  {
    title: 'Sidebar and Modal',
    imagePath: `${imagePathPrefix}/sidebar-and-modal.png`,
    description: 'Interactive sidebar and modal components built with React.',
  },
  {
    title: 'Carousel Component',
    imagePath: `${imagePathPrefix}/carousel.png`,
    description: 'An interactive carousel component built with React.',
  },
];
