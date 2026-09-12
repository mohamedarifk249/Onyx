import { useState } from 'react';
import onyxLogo from '../assets/images/onyx-logo.png';
import { RouterLink, useRouter } from '../router';
import { useSiteSettings } from '../context/SiteSettings';
import { useT } from '../i18n/useT';
import { LanguageIcon, SunIcon, MoonIcon } from '../components/UtilityIcons';

const NAV_ITEMS = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'about', href: '/about' },
  { key: 'certifications', href: '/certifications' },
  { key: 'contact', href: '/contact' },
];

/** Small circular icon button shared by the language + theme toggles. */
function IconToggle({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-brand-navy transition-colors duration-300 hover:bg-brand-navy/10 dark:text-white dark:hover:bg-white/10"
    >
      {children}
    </button>
  );
}

export default function Navbar() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme, lang, toggleLang } = useSiteSettings();
  const t = useT();

  const isActive = (item) => item.href === path;
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-50 bg-brand-light/75 backdrop-blur-xl backdrop-saturate-150 shadow-sm shadow-brand-navy/5 dark:bg-brand-dark-bg/80 dark:shadow-black/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12 xl:px-16">
        <RouterLink href="/" className="flex items-center">
          <img src={onyxLogo} alt="Onyx" className="h-9 w-auto lg:h-10" />
        </RouterLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <RouterLink
                href={item.href}
                className={`relative pb-1 font-heading text-[15px] font-medium text-brand-blue transition-colors duration-300 after:absolute after:bottom-0 after:start-0 after:h-[2px] after:bg-brand-blue after:transition-all after:duration-300 dark:text-sky-300 dark:after:bg-sky-300 ${
                  isActive(item) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {t.nav[item.key]}
              </RouterLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          {/* Language + theme toggles (always visible, desktop and mobile) */}
          <IconToggle onClick={toggleLang} label={lang === 'en' ? t.nav.switchToArabic : t.nav.switchToEnglish}>
            <span className="flex items-center gap-1">
              <LanguageIcon className="h-[18px] w-[18px]" />
              <span className="font-heading text-[10px] font-bold uppercase tracking-wide">
                {lang === 'en' ? 'AR' : 'EN'}
              </span>
            </span>
          </IconToggle>
          <IconToggle onClick={toggleTheme} label={isDark ? t.nav.switchToLight : t.nav.switchToDark}>
            {isDark ? <SunIcon className="h-[18px] w-[18px]" /> : <MoonIcon className="h-[18px] w-[18px]" />}
          </IconToggle>

          {/* Mobile toggle */}
          <button
            className="flex flex-col gap-1.5 p-1.5 lg:hidden"
            aria-label={t.nav.toggleMenu}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-0.5 w-6 bg-brand-navy transition-transform duration-300 dark:bg-white ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-brand-navy transition-opacity duration-300 dark:bg-white ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-brand-navy transition-transform duration-300 dark:bg-white ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-5">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <RouterLink
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 font-heading text-[15px] font-medium transition-colors duration-300 ${
                  isActive(item)
                    ? 'bg-brand-blue/10 text-brand-blue dark:bg-white/10 dark:text-sky-300'
                    : 'text-brand-navy dark:text-white/85'
                }`}
              >
                {t.nav[item.key]}
              </RouterLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
