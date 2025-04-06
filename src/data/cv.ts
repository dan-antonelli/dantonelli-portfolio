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
}

export const jobs: Job[] = [
  {
    id: 1,
    position: 'Senior Frontend Developer',
    workplace: 'EPAM',
    workplaceUrl: 'https://www.epam.com/',
    location: 'Remote',
    date: '2024 - present',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Developing **Secure File Sharing**, a Google Drive-like file sharing web application focused on security. The app is developed in **React
+ TypeScript**, serving thousands of users.`,
  },
  {
    id: 2,
    position: 'Senior Frontend Developer',
    workplace: 'Diligent',
    workplaceUrl: 'https://www.diligent.com/',
    location: 'Hybrid',
    date: '2022 - 2024',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Developing **Secure File Sharing**, a Google Drive-like file sharing web application focused on security. The app is developed in **React
+ TypeScript**, serving thousands of users.`,
  },
  {
    id: 3,
    position: 'Full Stack Developer',
    workplace: 'Budapest Bank Ltd.',
    workplaceUrl: 'https://www.mbhbank.com/',
    location: 'Remote',
    date: '2021 - 2022',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Full stack development on one of **Hungary's largest netbank applications (Spring/React + TypeScript)**, serving hundreds of
thousands of users.`,
  },
  {
    id: 4,
    position: 'Full Stack Developer',
    workplace: 'Zen Studios',
    workplaceUrl: 'https://zenstudios.com/',
    location: 'Hybrid',
    date: '2020 - 2021',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Full stack web development (**Node.js/React + TypeScript**) on internal applications supporting game development. Tool development using **Python**.`,
  },
  {
    id: 5,
    position: 'Full Stack Developer',
    workplace: 'DSS Consulting',
    workplaceUrl: 'https://dss.hu/en/home/',
    location: 'On-site',
    date: '2018 - 2020',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Developed **a web application for an automated workbench solution** produced by Bosch using **Angular + TypeScript** and **Java
(Spring/Java EE)**.`,
  },
  {
    id: 6,
    position: 'Technical Writer | Project Assistant',
    workplace: 'Semcon',
    workplaceUrl: 'https://www.semcon.com/',
    location: 'On-site',
    date: '2017 - 2018',
    city: 'Budapest',
    country: 'Hungary',
    summary: `**Produced/edited technical documentation** for telecommunication software. Automated tasks using **Python**.`,
  },
];
