import onyxLogo from '../assets/images/onyx-logo.png';
import { RouterLink } from '../router';
import { useT } from '../i18n/useT';

const NAV_KEYS = ['home', 'services', 'about', 'certifications', 'contact'];
const HREFS = { home: '/', services: '/services', about: '/about', certifications: '/certifications', contact: '/contact' };

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.06h2.71l.4-3.14h-3.11V7.9c0-.91.25-1.53 1.56-1.53h1.66V3.56C15.9 3.4 15.02 3.32 14 3.32c-2.6 0-4.38 1.59-4.38 4.5v2.48H7v3.14h2.62V21h3.88z" />
    </svg>
  );
}
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5zM5.47 4a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20 20h-2.94v-6.06c0-1.44-.03-3.3-2.01-3.3-2.01 0-2.32 1.57-2.32 3.2V20H9.79V8.5h2.82v1.57h.04c.39-.74 1.35-1.53 2.78-1.53 2.97 0 3.57 1.96 3.57 4.5V20z" />
    </svg>
  );
}
function GmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6 8-6" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:info@onyxethiopia.com', Icon: GmailIcon },
];

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-brand-navy pb-8 pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 xl:px-16">
        <div>
          <img src={onyxLogo} alt="Onyx" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{t.footer.description}</p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <RouterLink href={HREFS[key]} className="text-sm text-white/60 transition-colors duration-300 hover:text-brand-orange">
                  {t.nav[key]}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.contact}</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>{t.contactPage.info.address.lines[0]}</li>
            <li>{t.contactPage.info.address.lines[1]}</li>
            <li>{t.contactPage.info.email.lines[0]}</li>
            <li>{t.contactPage.info.phone.lines[0]}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">{t.footer.followUs}</h4>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40 lg:px-12 xl:px-16">
        © {new Date().getFullYear()} Onyx. {t.footer.rights}
      </div>
    </footer>
  );
}
