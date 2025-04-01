import Background from '../components/Background';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

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
