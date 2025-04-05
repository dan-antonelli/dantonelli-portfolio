interface Job {
  id: number;
  position: string;
  workplace: string;
  workplaceUrl: string;
  location: 'On-site' | 'Hybrid' | 'Remote';
  date: string;
  city: string;
  country: string;
  summary: string;
  description: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    position: 'Senior Frontend Developer',
    workplace: 'Diligent',
    workplaceUrl: 'https://www.diligent.com/',
    location: 'Hybrid',
    date: '2022',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Developing Secure File Sharing, a Google Drive-like file sharing web application focused on security. The app is developed in React
+ TypeScript, serving thousands of users.`,
    description: [
      'Optimized the application to run seamlessly for over 3000 users by refactoring large portions and migrating to React 18.',
      'Containerized our separate environments using Docker that sped up development speed by 20%.',
      `Introduced styled components and implemented an internal design system to improve cooperation with the designer team, and to
speed up the development by 20%.`,
      'Improved the test coverage by 35% through the introduction of component- and unit tests.',
      'Made the client application Web Accessibility WCAG 2.1 compliant.',
      'Introduced Google code review standards within the team.',
      'Mentored junior developers and interns.',
    ],
  },
];
