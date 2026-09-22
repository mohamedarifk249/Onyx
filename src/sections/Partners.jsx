import ehLogo from '../assets/images/eh-logo.png';
import ArrowIcon from '../components/ArrowIcon';
import { RouterLink } from '../router';

const PARTNER = {
  name: 'Endress + Hauser',
  tagline: 'People For Process Automation',
  description:
    'Onyx is an independent engineering company with Endress+Hauser as its strongest technology partnership. As an Endress+Hauser Authorized Service Provider in Ethiopia, we provide local customers with qualified technical support for Endress+Hauser measurement and instrumentation solutions.',
};

export default function Partners() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-24">
      <h2 className="reveal text-center font-heading text-3xl font-bold text-brand-blue dark:text-sky-300 sm:text-4xl">
        Our Partners
      </h2>

      <div
        className="reveal mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14"
        style={{ transitionDelay: '120ms' }}
      >
        {/* Card stays white in dark mode too — source logo images have a
            baked-in white background, so a dark card would show an ugly
            mismatched box around each one instead of a clean logo chip. */}
        <div className="flex items-center justify-center overflow-hidden rounded-lg border border-brand-blue/10 bg-white p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          <img src={ehLogo} alt={PARTNER.name} className="h-auto w-full max-w-[340px]" />
        </div>

        <div className="relative">
          <h3 className="font-heading text-2xl font-bold text-brand-orange sm:text-3xl">{PARTNER.name}</h3>
          <p className="mt-1 font-heading text-base font-semibold text-brand-orange/90">{PARTNER.tagline}</p>

          <p className="mt-5 max-w-2xl leading-relaxed text-brand-blue/90 dark:text-white/80">{PARTNER.description}</p>

          <RouterLink
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            Learn More
            <ArrowIcon className="h-7 w-7" />
          </RouterLink>
        </div>
      </div>
    </section>
  );
}
