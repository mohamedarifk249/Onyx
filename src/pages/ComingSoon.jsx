import ArrowIcon from '../components/ArrowIcon';
import { RouterLink } from '../router';
import usePageMeta from '../hooks/usePageMeta';

export default function ComingSoon() {
  usePageMeta('Certifications', 'Onyx certification documents are coming soon. Contact our engineering team for details on our qualifications and authorizations.');

  return (
    <section className="bg-brand-light py-24 dark:bg-brand-dark-surface-2 lg:py-32">
      <div className="reveal mx-auto max-w-2xl px-6 text-center lg:px-12 xl:px-16">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">Certifications</p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
          Coming Soon
        </h1>
        <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">
          We're preparing our certification documents for publication on the site. In the meantime, talk to our
          engineering team if you need details on our qualifications and authorizations.
        </p>
        <RouterLink
          href="/contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
        >
          Talk To Our Engineering Team
          <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1" />
        </RouterLink>
      </div>
    </section>
  );
}
