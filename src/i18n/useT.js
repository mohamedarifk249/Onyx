import { useSiteSettings } from '../context/SiteSettings';
import { translations } from './translations';

/** Returns the translation object for the currently active language. */
export function useT() {
  const { lang } = useSiteSettings();
  return translations[lang];
}
