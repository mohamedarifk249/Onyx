import { useRef } from 'react';
import ehLogo from '../assets/images/eh-logo.png';
import aboutHeroPhoto from '../assets/images/about/about-hero-photo.jpg';
import aboutHeroVideoWebm from '../assets/images/about/about-hero-video.webm';
import aboutHeroVideoMp4 from '../assets/images/about/about-hero-video.mp4';
import LogoMarquee from '../components/LogoMarquee';
import ArrowIcon from '../components/ArrowIcon';
import usePageMeta from '../hooks/usePageMeta';
import {
  CalendarIcon,
  GaugeIcon,
  ShieldCheckIcon,
  SlidersIcon,
  WrenchIcon,
  NetworkIcon,
} from '../components/ServiceIcons';

const STATS = [
  { value: '2012', label: 'Operating In Ethiopia Since' },
  { value: '17+', label: 'Industry Customers' },
  { value: '1', label: 'E+H Authorized Partnership' },
];

const WHY_ONYX = [
  {
    id: 'experience',
    Icon: CalendarIcon,
    title: 'Over a decade of local experience',
    text: 'Since 2012, we have been supporting industrial customers and developing our expertise in Ethiopia’s process industries.',
  },
  {
    id: 'ehExpertise',
    Icon: GaugeIcon,
    title: 'Endress+Hauser expertise',
    text: 'Our specialization in Endress+Hauser instrumentation gives customers access to proven process measurement technology and specialized product knowledge.',
  },
  {
    id: 'authorized',
    Icon: ShieldCheckIcon,
    title: 'Authorized service capability',
    text: 'As an Endress+Hauser Authorized Service Provider, our customers can access qualified local technical support and service.',
  },
  {
    id: 'calibration',
    Icon: SlidersIcon,
    title: 'Specialized flowmeter calibration',
    text: 'Our on-site digital flowmeter calibration capability allows industrial customers to verify and maintain the accuracy of their flow measurement systems directly at their facilities.',
  },
  {
    id: 'engineering',
    Icon: WrenchIcon,
    title: 'Engineering beyond the instrument',
    text: 'We don’t look at instrumentation in isolation. We consider the application, process, installation, commissioning, and long-term operation of the solution.',
  },
  {
    id: 'solutions',
    Icon: NetworkIcon,
    title: 'A solutions-oriented approach',
    text: 'While instrumentation remains our core specialization, we are continuously expanding our capabilities toward integrated automation, monitoring, and energy solutions.',
  },
];

export default function AboutUs() {
  usePageMeta(
    'About Us',
    'Onyx is a process automation solutions provider in Ethiopia since 2012, and an Endress+Hauser Authorized Service Provider combining local engineering with world-class technology.'
  );
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
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">Who We Are</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
            About Onyx
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">
            Onyx is a process automation solutions provider specializing in industrial instrumentation,
            measurement, and engineering services.
          </p>
        </div>
      </section>

      {/* Who we are + hero media */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
              Local Engineering. Global Technology.
            </h2>
            <p className="mt-6 leading-relaxed text-brand-navy/90 dark:text-white/80">
              We help process industries measure, control, monitor, and improve their operations through reliable
              instrumentation, engineering expertise, and integrated automation solutions. With experience in the
              Ethiopian industrial market since 2012, Onyx combines local engineering capability with world-class
              Endress+Hauser technology and expertise to deliver practical solutions tailored to our customers'
              processes.
            </p>
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
              Hover to play
            </div>
          </div>
        </div>
      </section>

      {/* Onyx by the numbers */}
      <section className="border-y border-brand-blue/10 dark:border-white/10">
        <div className="reveal mx-auto grid max-w-4xl grid-cols-3 divide-x divide-brand-blue/10 px-6 py-10 text-center dark:divide-white/10 sm:px-8 lg:px-12 xl:px-16">
          {STATS.map((stat) => (
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
            {/* Card stays white in dark mode too — the E+H logo file has a
                baked-in white background, so a dark card would show an ugly
                mismatched box around it instead of a clean logo chip. */}
            <div className="reveal flex items-center justify-center rounded-lg bg-white p-6 shadow-lg">
              <img src={ehLogo} alt="Endress+Hauser" className="h-auto w-full max-w-[260px]" />
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
                Our Endress+Hauser Partnership
              </h2>
              <p className="mt-2 font-heading text-base font-semibold text-brand-orange">
                World-Class Technology. Local Expertise.
              </p>
              <p className="mt-5 leading-relaxed text-brand-navy/90 dark:text-white/80">
                Onyx is an independent engineering company with Endress+Hauser as its strongest technology
                partnership. As an Endress+Hauser Authorized Service Provider in Ethiopia, we provide local
                customers with qualified technical support for Endress+Hauser measurement and instrumentation
                solutions. Our partnership gives customers access to world-class measurement technology backed by
                local engineering expertise, service capability, and knowledge of the Ethiopian industrial
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Onyx */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">Why Onyx</h2>
          <p className="mt-2 font-heading text-base font-semibold text-brand-orange">
            Local Experience. Specialized Expertise. Reliable Support.
          </p>
        </div>
        <div className="reveal mt-12 grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2" style={{ transitionDelay: '120ms' }}>
          {WHY_ONYX.map((reason) => (
            <div key={reason.id} className="flex gap-4">
              <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <reason.Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-brand-navy dark:text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/75 dark:text-white/70">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach / Direction / Commitment */}
      <section className="bg-brand-light py-20 dark:bg-brand-dark-surface-2 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-6">
            <div className="reveal border-t-2 border-brand-orange pt-6">
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">Our Approach</h3>
              <p className="mt-1 text-sm font-semibold text-brand-orange">Understand The Process. Solve The Problem.</p>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">
                Every industrial application is different. We begin by understanding the customer's process,
                measurement requirements, operating conditions, and objectives, then combine the right technology
                with practical field experience.
              </p>
            </div>

            <div className="hidden items-center justify-center pt-9 text-brand-orange/40 lg:flex" aria-hidden="true">
              <ArrowIcon bare className="h-5 w-5" />
            </div>

            <div className="reveal border-t-2 border-brand-orange pt-6" style={{ transitionDelay: '100ms' }}>
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">Our Direction</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">
                Instrumentation and measurement are our foundation. Our next stage of growth is to build on it and
                expand further into process automation, industrial monitoring, energy management, and integrated
                solutions.
              </p>
            </div>

            <div className="hidden items-center justify-center pt-9 text-brand-orange/40 lg:flex" aria-hidden="true">
              <ArrowIcon bare className="h-5 w-5" />
            </div>

            <div className="reveal border-t-2 border-brand-orange pt-6" style={{ transitionDelay: '200ms' }}>
              <h3 className="font-heading text-lg font-bold text-brand-navy dark:text-white">Our Commitment</h3>
              <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 dark:text-white/75">
                We combine global technology with local expertise to help industry operate with greater
                confidence, reliability, and efficiency — from understanding the process to supporting it long
                after installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-20 lg:py-24">
        <h2 className="reveal px-6 text-center font-heading text-2xl font-bold text-brand-blue dark:text-sky-300 sm:text-3xl">
          Trusted By Industry Leaders
        </h2>
        <div className="reveal mt-10" style={{ transitionDelay: '120ms' }}>
          <LogoMarquee />
        </div>
      </section>
    </>
  );
}
