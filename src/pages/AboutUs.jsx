import { useRef } from 'react';
import ehLogo from '../assets/images/eh-logo.png';
import aboutHeroPhoto from '../assets/images/about/about-hero-photo.jpg';
import aboutHeroVideoWebm from '../assets/images/about/about-hero-video.webm';
import aboutHeroVideoMp4 from '../assets/images/about/about-hero-video.mp4';
import LogoMarquee from '../components/LogoMarquee';
import ArrowIcon from '../components/ArrowIcon';
import { useT } from '../i18n/useT';
import {
  CalendarIcon,
  GaugeIcon,
  ShieldCheckIcon,
  SlidersIcon,
  WrenchIcon,
  NetworkIcon,
} from '../components/ServiceIcons';

const WHY_ONYX_IDS = ['experience', 'ehExpertise', 'authorized', 'calibration', 'engineering', 'solutions'];
const WHY_ONYX_ICONS = {
  experience: CalendarIcon,
  ehExpertise: GaugeIcon,
  authorized: ShieldCheckIcon,
  calibration: SlidersIcon,
  engineering: WrenchIcon,
  solutions: NetworkIcon,
};

export default function AboutUs() {
  const t = useT();
  const videoRef = useRef(null);

  const playPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <>
      {/* Page banner */}
      <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-20">
        <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-12 xl:px-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">{t.aboutPage.eyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
            {t.aboutPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">{t.aboutPage.intro}</p>
        </div>
      </section>

      {/* Who we are + hero media */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
              {t.aboutPage.whoWeAre.heading}
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/90 dark:text-white/80">{t.aboutPage.whoWeAre.paragraph}</p>
          </div>

          <div
            className="reveal group relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg shadow-xl"
            style={{ transitionDelay: '150ms' }}
            onMouseEnter={playPreview}
            onMouseLeave={stopPreview}
            onFocus={playPreview}
            onBlur={stopPreview}
            tabIndex={0}
          >
            <img
              src={aboutHeroPhoto}
              alt="Onyx engineer calibrating an Endress+Hauser flow instrument"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
            >
              <source src={aboutHeroVideoWebm} type="video/webm" />
              <source src={aboutHeroVideoMp4} type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute bottom-4 start-4 rounded-full bg-brand-navy/70 px-3 py-1 font-heading text-xs font-medium uppercase tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {t.aboutPage.hoverToPlay}
            </div>
          </div>
        </div>
      </section>

      {/* Onyx by the numbers */}
      <section className="border-y border-brand-blue/10 dark:border-white/10">
        <div className="reveal mx-auto grid max-w-4xl grid-cols-3 divide-x divide-brand-blue/10 px-6 py-10 text-center dark:divide-white/10 sm:px-8 lg:px-12 xl:px-16">
          {t.aboutPage.stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <p className="font-heading text-3xl font-extrabold text-brand-blue dark:text-sky-300 sm:text-4xl">{stat.value}</p>
              <p className="mt-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-brand-navy/60 dark:text-white/55 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Endress+Hauser partnership */}
      <section className="bg-brand-light py-20 dark:bg-brand-dark-surface-2 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
            <div className="reveal flex items-center justify-center rounded-lg bg-white p-10 shadow-lg dark:bg-brand-dark-surface">
              <img src={ehLogo} alt="Endress+Hauser" className="h-auto w-full max-w-[220px]" />
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
                {t.aboutPage.partnership.heading}
              </h2>
              <p className="mt-2 font-heading text-base font-semibold text-brand-orange">{t.aboutPage.partnership.tagline}</p>
              <p className="mt-5 leading-relaxed text-brand-navy/90 dark:text-white/80">{t.aboutPage.partnership.paragraph}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Onyx */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">{t.aboutPage.whyOnyx.heading}</h2>
          <p className="mt-2 font-heading text-base font-semibold text-brand-orange">{t.aboutPage.whyOnyx.tagline}</p>
        </div>
        <div className="reveal mt-12 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2" style={{ transitionDelay: '120ms' }}>
          {WHY_ONYX_IDS.map((id) => {
            const reason = t.aboutPage.whyOnyx.items[id];
            const Icon = WHY_ONYX_ICONS[id];
            return (
              <div key={id} className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-brand-navy dark:text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-navy/75 dark:text-white/70">{reason.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach / Direction / Commitment */}
      <section className="bg-brand-light py-20 dark:bg-brand-dark-surface-2 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-6">
            <div className="reveal border-t-2 border-brand-orange pt-6">
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">{t.aboutPage.approach.heading}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-orange">{t.aboutPage.approach.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">{t.aboutPage.approach.text}</p>
            </div>

            <div className="hidden items-center justify-center pt-9 text-brand-orange/40 lg:flex" aria-hidden="true">
              <ArrowIcon bare className="h-5 w-5" />
            </div>

            <div className="reveal border-t-2 border-brand-orange pt-6" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">{t.aboutPage.direction.heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">{t.aboutPage.direction.text}</p>
            </div>

            <div className="hidden items-center justify-center pt-9 text-brand-orange/40 lg:flex" aria-hidden="true">
              <ArrowIcon bare className="h-5 w-5" />
            </div>

            <div className="reveal border-t-2 border-brand-orange pt-6" style={{ transitionDelay: '200ms' }}>
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">{t.aboutPage.commitment.heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">{t.aboutPage.commitment.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-20 lg:py-24">
        <h2 className="reveal px-6 text-center font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
          {t.aboutPage.trustedBy}
        </h2>
        <div className="reveal mt-10" style={{ transitionDelay: '120ms' }}>
          <LogoMarquee />
        </div>
      </section>
    </>
  );
}
