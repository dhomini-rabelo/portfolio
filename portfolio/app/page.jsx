// components
import About from '@/components/About';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Projects from '@/components/Projects';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Services /> */}
      {/* <Work /> */}
      <Projects />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
