import { Background, CV, Footer, Navbar } from '@/components';

export default function CVPage() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <CV />
      </main>
      <Footer />
    </>
  );
}
