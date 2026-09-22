import { useEffect, useRef, useState } from 'react';

const VALUES = [
  {
    id: 'professionalism',
    title: 'Professionalism',
    desc: 'We uphold the highest standards of technical and ethical conduct in every project we deliver.',
  },
  {
    id: 'integration',
    title: 'Integration',
    desc: 'We take on multi-disciplinary projects and deliver added value through our in-house expertise.',
  },
  {
    id: 'flexibility',
    title: 'Flexibility',
    desc: 'We tailor every solution to the quality, timeline, and budget your project needs.',
  },
  {
    id: 'capability',
    title: 'Capability',
    desc: 'Our engineering teams bring proven, hands-on experience across industrial and commercial sectors.',
  },
];

// Matches Tailwind's `lg` breakpoint, which is where this component switches
// from the mobile pinned-scroll experience to the desktop hover cards.
const MOBILE_BREAKPOINT = 1024;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isMobile;
}

// Drives the mobile "pinned stack" effect: as the user scrolls through a tall
// wrapper, a sticky viewport stays fixed on screen while the active card is
// swapped based on scroll progress, so each value gets its own full-screen
// moment before handing off to the next.
function usePinnedStack(count) {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState(0);
  const [exitFade, setExitFade] = useState(1);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return undefined;
    const wrapper = wrapperRef.current;
    if (!wrapper) return undefined;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const total = rect.height - viewportHeight;
      if (total <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / total));
      const index = Math.min(count - 1, Math.floor(progress * count));
      setActive(index);

      const fadeZone = 0.06;
      const fade = progress > 1 - fadeZone ? (1 - progress) / fadeZone : 1;
      setExitFade(Math.max(0, Math.min(1, fade)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isMobile, count]);

  return { wrapperRef, active, exitFade };
}

export default function Values() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const { wrapperRef, active, exitFade } = usePinnedStack(VALUES.length);

  return (
    <section className="py-20 lg:mx-auto lg:max-w-7xl lg:px-12 lg:py-24 xl:px-16">
      <h2 className="reveal px-6 text-center font-heading text-3xl font-bold text-brand-blue dark:text-sky-300 sm:text-4xl lg:px-0">
        Our Values
      </h2>

      {/* Desktop: hover-to-expand cards (unchanged) */}
      <div
        className="reveal mt-12 hidden items-stretch justify-center gap-6 lg:flex"
        onMouseLeave={() => setHoverIndex(null)}
      >
        {VALUES.map((value, index) => {
          const isActive = hoverIndex === index;
          return (
            <div
              key={value.id}
              onMouseEnter={() => setHoverIndex(index)}
              onFocus={() => setHoverIndex(index)}
              onBlur={() => setHoverIndex(null)}
              tabIndex={0}
              className={`flex w-56 cursor-pointer flex-col items-center justify-center rounded-lg px-6 text-center transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange ${
                isActive
                  ? 'scale-110 bg-brand-blue py-10 shadow-xl'
                  : 'scale-100 bg-brand-light py-8 shadow-none dark:bg-brand-dark-surface-2'
              } ${hoverIndex !== null && !isActive ? 'opacity-60' : 'opacity-100'}`}
            >
              <span
                className={`font-heading text-lg font-bold tracking-wide transition-colors duration-500 ${
                  isActive ? 'text-white' : 'text-brand-blue dark:text-sky-300'
                }`}
              >
                {value.title.toUpperCase()}
              </span>
              <p
                className={`overflow-hidden text-sm leading-relaxed text-white/90 transition-all duration-500 ease-out ${
                  isActive ? 'mt-3 max-h-32 opacity-100' : 'mt-0 max-h-0 opacity-0'
                }`}
              >
                {value.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="reveal mx-auto mt-16 hidden h-px w-24 bg-brand-navy/20 dark:bg-white/15 lg:block" />

      {/* Mobile: pinned magnetic-scroll stack — cards hold in place while scrolling and hand off one at a time */}
      <div ref={wrapperRef} className="relative mt-4 lg:hidden" style={{ height: `${VALUES.length * 100}vh` }}>
        <div
          className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 dark:bg-brand-dark-bg"
          style={{ opacity: exitFade }}
        >
          {VALUES.map((value, index) => {
            const isActive = index === active;
            const isPast = index < active;
            return (
              <div
                key={value.id}
                aria-hidden={!isActive}
                className="absolute inset-x-6 flex max-w-md flex-col items-center justify-center rounded-2xl bg-brand-blue px-8 py-14 text-center shadow-2xl transition-all duration-500 ease-out"
                style={{
                  left: '50%',
                  marginLeft: 'min(-10.5rem, -45vw)',
                  width: 'min(21rem, 90vw)',
                  opacity: isActive ? 1 : 0,
                  transform: isActive
                    ? 'translateY(0) scale(1)'
                    : isPast
                      ? 'translateY(-52px) scale(0.92)'
                      : 'translateY(52px) scale(0.92)',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <span className="font-heading text-xl font-bold tracking-wide text-white">
                  {value.title.toUpperCase()}
                </span>
                <p className="mt-4 text-base leading-relaxed text-white/90">{value.desc}</p>
                <div className="mt-8 flex items-center gap-1.5">
                  {VALUES.map((dot, dotIndex) => (
                    <span
                      key={dot.id}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        dotIndex === active ? 'w-5 bg-white' : 'w-1.5 bg-white/35'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
