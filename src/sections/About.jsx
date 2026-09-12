import aboutImg from '../assets/images/about-teaser.jpg';
import { useT } from '../i18n/useT';

export default function About() {
  const t = useT();

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <h2 className="font-heading text-3xl font-bold text-brand-blue dark:text-sky-300 sm:text-4xl">
            {t.about.heading}
          </h2>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-brand-blue dark:text-sky-300">
            {t.about.subheading}
          </h3>
          <p className="mt-6 leading-relaxed text-brand-blue/90 dark:text-white/80">{t.about.paragraph}</p>
        </div>

        <div className="reveal relative" style={{ transitionDelay: '150ms' }}>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl sm:aspect-[16/11] lg:aspect-auto">
            <img
              src={aboutImg}
              alt="Onyx instrumentation on a rooftop installation overlooking Addis Ababa"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
