import { Background, Footer, Navbar, Projects } from '@components/index';

export default function ProjectsPage() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <Projects isPreview={false} />
      </main>
      <Footer />
    </>
  );
}
