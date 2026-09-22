import onyxLogo from '../assets/images/onyx-logo.png';
import { RouterLink } from '../router';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

const LINKEDIN_URL = 'https://et.linkedin.com/company/onyx-for-engineering-&-integrated-solutions-plc';

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
  { label: 'LinkedIn', href: LINKEDIN_URL, Icon: LinkedInIcon },
  { label: 'Email', href: 'mailto:contact@onyxethiopia.com', Icon: GmailIcon },
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy pb-8 pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 xl:px-16">
        <div>
          <img src={onyxLogo} alt="Onyx" className="h-9 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Engineering, automation and calibration solutions for industrial and commercial organizations across
            Ethiopia.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <RouterLink href={item.href} className="text-sm text-white/60 transition-colors duration-300 hover:text-brand-orange">
                  {item.label}
                </RouterLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Afework Building, 2nd Floor</li>
            <li>Addis Ababa, Ethiopia</li>
            <li>contact@onyxethiopia.com</li>
            <li>+251 (0) 115 22 6060</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/40 lg:px-12 xl:px-16">
        © {new Date().getFullYear()} Onyx. All rights reserved.
      </div>
    </footer>
  );
}
