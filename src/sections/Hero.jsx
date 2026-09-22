import heroImg from '../assets/images/hero-engineer.jpg';
import ArrowIcon from '../components/ArrowIcon';
import { RouterLink } from '../router';

const gradient =
  'linear-gradient(to right, #007DBF 0%, rgba(0,125,191,0.85) 30%, rgba(0,125,191,0.45) 55%, rgba(0,125,191,0.05) 78%, transparent 92%)';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Onyx engineer commissioning an Endress+Hauser instrument on site"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: gradient }} />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-6 py-24 lg:min-h-[640px] lg:px-12 xl:px-16">
        <div className="max-w-2xl">
          <h1 className="reveal font-heading text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Industrial Engineering & Process Automation
          </h1>
          <h2 className="reveal mt-4 font-heading text-xl font-medium text-white/95 sm:text-2xl lg:text-3xl" style={{ transitionDelay: '100ms' }}>
            Engineering Smarter Industrial Operations
          </h2>
          <p className="reveal mt-4 max-w-xl text-base leading-relaxed text-white/85" style={{ transitionDelay: '200ms' }}>
            Onyx delivers integrated engineering, instrumentation, automation, and calibration solutions for
            industrial and commercial organizations across Ethiopia.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-4" style={{ transitionDelay: '300ms' }}>
            <RouterLink
              href="/services"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
            >
              Explore Our Solutions
              <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1" />
            </RouterLink>
            <RouterLink
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-light px-6 py-3 font-heading text-sm font-semibold text-brand-orange shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-brand-dark-surface-2"
            >
              Talk To An Engineer
              <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  );
}
