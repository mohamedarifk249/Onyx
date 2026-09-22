import trustImg from '../assets/images/trust-engineer.jpg';
import { useSiteSettings } from '../context/SiteSettings';

const STEPS = [
  'Since 2012, we have been supporting industrial customers and developing our expertise in Ethiopia’s process industries.',
  'Our on-site digital flowmeter calibration capability allows industrial customers to verify and maintain the accuracy of their flow measurement systems directly at their facilities.',
  'We don’t look at instrumentation in isolation — we consider the application, process, installation, commissioning, and long-term operation of the solution.',
];

export default function Trust() {
  const { theme } = useSiteSettings();
  const isDark = theme === 'dark';

  // The mask fades the photo into the section background so the heading can
  // sit on a clean, high-contrast field. The mask color tracks the current
  // theme (the section background is white in light mode, near-black navy
  // in dark mode — a plain white mask would leave an ugly bright patch over
  // a dark page).
  const maskColor = isDark ? '7,23,38' : '255,255,255';
  const gradient = `linear-gradient(to right, rgba(${maskColor},1) 0%, rgba(${maskColor},1) 32%, rgba(${maskColor},0.75) 52%, rgba(${maskColor},0.35) 72%, rgba(${maskColor},0.15) 100%)`;

  return (
    <section className="relative overflow-hidden bg-white pt-16 dark:bg-brand-dark-bg lg:pt-20">
      {/* Background photo, masked with a gradient fading in from the left */}
      <div className="absolute inset-x-0 top-0 h-[420px] lg:h-[460px]">
        <img src={trustImg} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-60 grayscale" />
        <div className="absolute inset-0" style={{ background: gradient }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="reveal max-w-2xl pt-8 lg:pt-10">
          <h2 className="font-heading text-2xl font-bold text-brand-navy dark:text-white sm:text-3xl">
            Built On Trust Driven By Partnership
          </h2>
          <p className="mt-3 leading-relaxed text-brand-navy/70 dark:text-white/70">
            We combine global technology with local expertise to help industry operate with greater confidence,
            reliability, and efficiency.
          </p>
        </div>

        <div
          className="reveal relative mt-16 rounded-lg bg-white p-4 shadow-2xl dark:bg-brand-dark-surface sm:p-5 lg:mt-20 lg:p-6"
          style={{ transitionDelay: '120ms' }}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STEPS.map((text, index) => (
              <div
                key={index}
                className="group cursor-default rounded-lg px-6 py-6 transition-colors duration-300 hover:bg-brand-navy lg:px-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-orange font-heading text-base font-bold text-brand-orange transition-colors duration-300 group-hover:border-white group-hover:text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-brand-navy/80 transition-colors duration-300 group-hover:text-white dark:text-white/75">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 lg:h-20" />
    </section>
  );
}
