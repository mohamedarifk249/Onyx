import ehLogo from '../assets/images/eh-logo.png';
import ArrowIcon from '../components/ArrowIcon';
import { ShieldCheckIcon } from '../components/ServiceIcons';
import { RouterLink } from '../router';

export default function AuthorizedBanner() {
  return (
    <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-24">
      <div className="reveal mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-12 xl:px-16">
        {/* Badge stays white in dark mode too — the E+H logo file has a
            baked-in white background, so a dark badge would show an ugly
            mismatched box around it instead of a clean circular chip. */}
        <div className="mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-lg sm:h-40 sm:w-40">
          <img src={ehLogo} alt="Endress+Hauser" className="h-[85%] w-[85%] object-contain" />
        </div>

        <div className="text-center lg:text-start">
          <span className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-wide text-brand-orange">
            <ShieldCheckIcon className="h-4 w-4" />
            Authorized Service Provider
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-navy dark:text-white sm:text-3xl">
            Endress+Hauser Authorized Service Provider In Ethiopia
          </h2>
          <p className="mt-3 text-lg font-medium leading-relaxed text-brand-blue dark:text-sky-300">
            World-Class Technology. Local Expertise.
          </p>
          <RouterLink
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            Learn More
            <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1" />
          </RouterLink>
        </div>
      </div>
    </section>
  );
}
