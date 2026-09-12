import { useState } from 'react';
import ehLogo from '../assets/images/eh-logo.png';
import centecLogo from '../assets/images/centec-logo.jpg';
import ArrowIcon from '../components/ArrowIcon';
import { RouterLink } from '../router';
import { useT } from '../i18n/useT';

const PARTNER_IDS = ['eh', 'centec'];
const LOGOS = { eh: ehLogo, centec: centecLogo };
// TODO(content): no Centec copy exists in website content.docx yet — the
// English AND Arabic descriptions are placeholders left unchanged on
// purpose. Swap in real partnership text as soon as Onyx provides it.

export default function Partners() {
  const t = useT();
  const [index, setIndex] = useState(0);
  const id = PARTNER_IDS[index];
  const partner = t.partners.items[id];

  const next = () => setIndex((i) => (i + 1) % PARTNER_IDS.length);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-24">
      <h2 className="reveal text-center font-heading text-3xl font-bold text-brand-blue dark:text-sky-300 sm:text-4xl">
        {t.partners.heading}
      </h2>

      <div
        className="reveal mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14"
        style={{ transitionDelay: '120ms' }}
      >
        <div className="flex items-center justify-center overflow-hidden rounded-lg border border-brand-blue/10 bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-brand-dark-surface">
          <img
            key={id}
            src={LOGOS[id]}
            alt={partner.name}
            className="h-auto w-full max-w-[260px] animate-[contentFade_0.5s_cubic-bezier(0.22,1,0.36,1)]"
          />
        </div>

        <div key={id + '-text'} className="relative animate-[contentFade_0.5s_cubic-bezier(0.22,1,0.36,1)]">
          <h3 className="font-heading text-2xl font-bold text-brand-orange sm:text-3xl">{partner.name}</h3>
          <p className="mt-1 font-heading text-base font-semibold text-brand-orange/90">{partner.tagline}</p>

          <div className="relative mt-5 max-w-2xl pe-20 sm:pe-24">
            <p className="leading-relaxed text-brand-blue/90 dark:text-white/80">{partner.description}</p>

            <button
              onClick={next}
              aria-label={t.partners.nextAria}
              className="absolute -end-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-brand-orange text-brand-navy shadow-md transition-all duration-300 hover:-translate-y-[calc(50%+2px)] hover:shadow-lg sm:h-14 sm:w-14"
            >
              <ArrowIcon bare className="h-5 w-5" />
            </button>
          </div>

          <RouterLink
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
          >
            {t.partners.cta}
            <ArrowIcon className="h-7 w-7 rtl:group-hover:-translate-x-1" />
          </RouterLink>

          <div className="mt-6 flex gap-2">
            {PARTNER_IDS.map((pId, i) => (
              <button
                key={pId}
                aria-label={t.partners.showAria.replace('{name}', t.partners.items[pId].name)}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-brand-orange' : 'w-4 bg-brand-blue/20 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
