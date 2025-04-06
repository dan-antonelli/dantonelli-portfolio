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
    workplace: 'Diligent',
    workplaceUrl: 'https://www.diligent.com/',
    location: 'Hybrid',
    date: '2022',
    city: 'Budapest',
    country: 'Hungary',
    summary: `Developing **Secure File Sharing**, a Google Drive-like file sharing web application focused on security. The app is developed in **React
+ TypeScript**, serving thousands of users.`,
  },
];
