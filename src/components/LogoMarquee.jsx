import dangote from '../assets/images/customers/1200px-Dangote_Group_Logo.svg.png';
import heineken from '../assets/images/customers/HEINEKEN-Logo-JPG.jpg';
import icl from '../assets/images/customers/ICL.png';
import zebidar from '../assets/images/customers/Zebidar_Logo_1.png';
import allana from '../assets/images/customers/allana.jpeg';
import bgi from '../assets/images/customers/bgi.png';
import bgr from '../assets/images/customers/bgr.png';
import coca from '../assets/images/customers/coca.jpg';
import dashen from '../assets/images/customers/dashen.jpg';
import habesha from '../assets/images/customers/habesha.png';
import horizonTyres from '../assets/images/customers/horizontyres-logo.jpg';
import lameShola from '../assets/images/customers/lame-shola-dairy.jpg';
import messebo from '../assets/images/customers/messbo.jpg';
import metaBeer from '../assets/images/customers/meta.jpg';
import moha from '../assets/images/customers/moha.jpg';
import nestle from '../assets/images/customers/nestle.jpg';
import raya from '../assets/images/customers/raya.png';

const LOGOS = [
  { name: 'Dangote Group', src: dangote },
  { name: 'Heineken', src: heineken },
  { name: 'ICL', src: icl },
  { name: 'Zebidar', src: zebidar },
  { name: 'Allana Potash', src: allana },
  { name: 'BGI Ethiopia', src: bgi },
  { name: 'BGR', src: bgr },
  { name: 'Coca-Cola', src: coca },
  { name: 'Dashen Beer', src: dashen },
  { name: 'Habesha Breweries', src: habesha },
  { name: 'Horizon Addis Tyre', src: horizonTyres },
  { name: 'Lame Shola Milk Enterprise', src: lameShola },
  { name: 'Messebo Cement', src: messebo },
  { name: 'Meta Beer', src: metaBeer },
  { name: 'MOHA', src: moha },
  { name: 'Nestlé', src: nestle },
  { name: 'Raya Beer', src: raya },
];

/**
 * Infinite auto-scrolling strip of customer logos. Each logo sits on a
 * uniform white card (the source files have inconsistent backgrounds), and
 * the logo list is duplicated once so the CSS animation loops seamlessly.
 * Respects prefers-reduced-motion via the global rule in index.css.
 */
export default function LogoMarquee() {
  const track = [...LOGOS, ...LOGOS];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent dark:from-brand-dark-bg sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent dark:from-brand-dark-bg sm:w-24" />

      <div className="marquee-track flex w-max items-center gap-5">
        {track.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            // Card stays white in dark mode too — most source logos are
            // opaque JPGs/PNGs with a baked-in white background, so a dark
            // card would show an ugly white box around each one instead of
            // a clean, consistent "logo chip".
            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg border border-brand-blue/10 bg-white p-4 shadow-sm dark:border-transparent dark:shadow-md sm:h-24 sm:w-48"
          >
            <img
              src={logo.src}
              alt={logo.name}
              loading="lazy"
              className="max-h-12 max-w-full object-contain sm:max-h-14"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
