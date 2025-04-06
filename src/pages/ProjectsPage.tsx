import { FlexContainer, Footer, Navbar, Projects } from '@components/index';

export default function ProjectsPage() {
  return (
    <FlexContainer>
      <Navbar />
      <Projects isPreview={false} />
      <Footer />
    </FlexContainer>
  );
}
