import { Background, Footer, Navbar, Projects } from '@components/index';

export default function ProjectsPage() {
  return (
    <>
      <Background />
      <Navbar />
      <Projects isPreview={false} />
      <Footer />
    </>
  );
}
