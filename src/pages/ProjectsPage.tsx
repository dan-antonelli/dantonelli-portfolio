import { Background, FlexContainer, Footer, Navbar, Projects } from '@components/index';

export default function ProjectsPage() {
  return (
    <FlexContainer>
      <Background />
      <Navbar />
      <Projects isPreview={false} />
      <Footer />
    </FlexContainer>
  );
}
