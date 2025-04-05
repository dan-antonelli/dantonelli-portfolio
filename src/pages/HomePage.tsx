import { Background, FlexContainer, Footer, Main, Navbar } from '@components/index';

export default function HomePage() {
  return (
    <FlexContainer>
      <Background />
      <Navbar />
      <Main />
      <Footer />
    </FlexContainer>
  );
}
