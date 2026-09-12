import ehLogo from '../assets/images/eh-logo.png';
import ArrowIcon from '../components/ArrowIcon';
import { ShieldCheckIcon } from '../components/ServiceIcons';
import { RouterLink } from '../router';
import { useT } from '../i18n/useT';

export default function AuthorizedBanner() {
  const t = useT();

  return (
    <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-24">
      <div className="reveal mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[auto_1fr] lg:gap-16 lg:px-12 xl:px-16">
        <div className="mx-auto flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white shadow-lg dark:bg-brand-dark-surface sm:h-40 sm:w-40">
          <img src={ehLogo} alt="Endress+Hauser" className="h-16 w-auto sm:h-[4.5rem]" />
        </div>

        <div className="text-center lg:text-start">
          <span className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold uppercase tracking-wide text-brand-orange">
            <ShieldCheckIcon className="h-4 w-4" />
            {t.authorizedBanner.eyebrow}
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold text-brand-navy dark:text-white sm:text-3xl">
            {t.authorizedBanner.heading}
          </h2>
          <p className="mt-3 text-lg font-medium leading-relaxed text-brand-blue dark:text-sky-300">
            {t.authorizedBanner.tagline}
          </p>
          <RouterLink
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            {t.authorizedBanner.cta}
            <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </RouterLink>
        </div>
      </div>
    </section>
  );
}
