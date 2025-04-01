import { Background, Footer, Navbar, Projects } from '../components';

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
