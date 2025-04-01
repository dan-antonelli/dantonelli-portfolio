const imagePathPrefix = '/projects';
interface Project {
  title: string;
  imagePath: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: 'Webshop',
    imagePath: `${imagePathPrefix}/webshop.png`,
    description: 'A webshop built with React.',
  },
  {
    title: 'Tour agency',
    imagePath: `${imagePathPrefix}/tour-agency.png`,
    description: 'A tour agency website created with HTML, CSS and vanilla JS.',
  },
  {
    title: 'Jobs dashboard',
    imagePath: `${imagePathPrefix}/jobs.png`,
    description: 'A job application tracker dashboard built with React',
  },
];
