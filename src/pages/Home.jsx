import Hero from '../sections/Hero';
import AuthorizedBanner from '../sections/AuthorizedBanner';
import About from '../sections/About';
import Values from '../sections/Values';
import Partners from '../sections/Partners';
import Trust from '../sections/Trust';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta(
    'Industrial Engineering & Process Automation',
    'Onyx delivers integrated engineering, instrumentation, automation, and calibration solutions for industrial and commercial organizations across Ethiopia. Endress+Hauser Authorized Service Provider.'
  );

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
