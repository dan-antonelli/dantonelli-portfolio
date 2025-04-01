import Background from '../Background';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Projects from '../Projects';

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
