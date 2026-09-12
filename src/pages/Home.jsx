import Hero from '../sections/Hero';
import AuthorizedBanner from '../sections/AuthorizedBanner';
import About from '../sections/About';
import Values from '../sections/Values';
import Partners from '../sections/Partners';
import Trust from '../sections/Trust';

export default function Home() {
  return (
    <>
      <Hero />
      <AuthorizedBanner />
      <About />
      <Values />
      <Partners />
      <Trust />
    </>
  );
}
