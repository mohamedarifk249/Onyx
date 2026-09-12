import { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';
import CheckIcon from '../components/CheckIcon';
import { GaugeIcon, WrenchIcon, SlidersIcon, NetworkIcon } from '../components/ServiceIcons';
import { RouterLink } from '../router';
import { useT } from '../i18n/useT';
import instrumentationImg from '../assets/images/services/instrumentation-flowmeter.jpg';
import engineeringImg from '../assets/images/services/engineering-commissioning.jpg';
import calibrationImg from '../assets/images/services/calibration-food-grade.jpg';
import automationImg from '../assets/images/services/automation-rooftop-atg.jpg';
import galleryFlowInstall from '../assets/images/services/gallery-flow-install.jpg';
import galleryFieldAdjustment from '../assets/images/services/gallery-field-adjustment.jpg';
import galleryTankTransmitter from '../assets/images/services/gallery-tank-transmitter.jpg';

const SERVICE_IDS = ['instrumentation', 'engineering', 'calibration', 'automation'];
const SERVICE_META = {
  instrumentation: { Icon: GaugeIcon, image: instrumentationImg },
  engineering: { Icon: WrenchIcon, image: engineeringImg },
  calibration: { Icon: SlidersIcon, image: calibrationImg },
  automation: { Icon: NetworkIcon, image: automationImg },
};

const GALLERY_IMAGES = [galleryFlowInstall, galleryFieldAdjustment, galleryTankTransmitter];

export default function Services() {
  const t = useT();
  const [active, setActive] = useState(0);
  const activeId = SERVICE_IDS[active];
  const service = t.servicesPage.items[activeId];

  return (
    <>
      {/* Page banner */}
      <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-20">
        <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-12 xl:px-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">{t.servicesPage.eyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">{t.servicesPage.intro}</p>
        </div>
      </section>

      {/* Interactive service selector */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <div className="reveal grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {SERVICE_IDS.map((id, index) => {
            const isActive = index === active;
            const { Icon } = SERVICE_META[id];
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={isActive}
                className={`flex flex-col items-center gap-3 rounded-xl border px-4 py-5 text-center transition-all duration-300 ${
                  isActive
                    ? 'border-brand-blue bg-brand-blue shadow-lg'
                    : 'border-brand-blue/15 bg-white hover:border-brand-blue/40 hover:shadow-md dark:border-white/10 dark:bg-brand-dark-surface dark:hover:border-white/25'
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-white/15' : 'bg-brand-blue/10 dark:bg-white/10'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-brand-blue dark:text-sky-300'}`} />
                </span>
                <span
                  className={`font-heading text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-brand-navy dark:text-white/85'
                  }`}
                >
                  {t.servicesPage.items[id].tab}
                </span>
              </button>
            );
          })}
        </div>

        <div className="reveal mt-12" style={{ transitionDelay: '120ms' }}>
          <div
            key={activeId}
            className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 animate-[contentFade_0.45s_cubic-bezier(0.22,1,0.36,1)]"
          >
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">{service.title}</h2>
              <p className="mt-4 leading-relaxed text-brand-navy/80 dark:text-white/75">{service.intro}</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-brand-navy/90 dark:text-white/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-lg shadow-xl">
              <img src={SERVICE_META[activeId].image} alt={service.alt} className="h-full max-h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* In the field gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-4 lg:px-12 xl:px-16">
        <h2 className="reveal text-center font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
          {t.servicesPage.inTheField}
        </h2>
        <div className="reveal mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3" style={{ transitionDelay: '120ms' }}>
          {t.servicesPage.gallery.map((alt, index) => (
            <div key={alt} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={GALLERY_IMAGES[index]}
                alt={alt}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Industries we serve */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-12 xl:px-16 lg:py-24">
        <h2 className="reveal font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
          {t.servicesPage.industriesHeading}
        </h2>
        <p className="reveal mx-auto mt-4 max-w-2xl leading-relaxed text-brand-navy/80 dark:text-white/75" style={{ transitionDelay: '80ms' }}>
          {t.servicesPage.industriesIntro}
        </p>
        <div className="reveal mt-8 flex flex-wrap justify-center gap-3" style={{ transitionDelay: '140ms' }}>
          {t.servicesPage.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-brand-blue/25 px-5 py-2 font-heading text-sm font-medium text-brand-blue dark:border-white/20 dark:text-sky-300"
            >
              {industry}
            </span>
          ))}
        </div>
        <p className="reveal mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-brand-navy/60 dark:text-white/60" style={{ transitionDelay: '200ms' }}>
          {t.servicesPage.industriesFooter}
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-20">
        <div className="reveal mx-auto max-w-3xl px-6 text-center lg:px-12 xl:px-16">
          <h2 className="font-heading text-2xl font-bold text-brand-navy dark:text-white sm:text-3xl">{t.servicesPage.closingHeading}</h2>
          <p className="mt-4 leading-relaxed text-brand-navy/80 dark:text-white/75">{t.servicesPage.closingText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <RouterLink
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
            >
              {t.servicesPage.closingCta}
              <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </RouterLink>
          </div>
        </div>
      </section>
    </>
  );
}
