import { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/ContactIcons';
import { useT } from '../i18n/useT';

// Keep the map query on the English/transliterated address regardless of UI
// language — Google's geocoder resolves this reliably, and re-querying with
// an Arabic-transliterated address risks a worse (or failed) map match.
const MAP_QUERY = 'Onyx For Engineering And Integrated Solutions PLC, Afework Building, Addis Ababa, Ethiopia';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;

const INFO_KEYS = ['address', 'email', 'phone', 'hours'];
const INFO_ICONS = { address: PinIcon, email: MailIcon, phone: PhoneIcon, hours: ClockIcon };

const inputClass =
  'w-full rounded-md border border-brand-blue/20 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors duration-300 focus:border-brand-blue dark:border-white/15 dark:bg-brand-dark-surface-2 dark:text-white dark:placeholder:text-white/40';

export default function Contact() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page banner */}
      <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-20">
        <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-12 xl:px-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">{t.contactPage.eyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">{t.contactPage.intro}</p>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-12 xl:px-16 lg:pt-20">
        <div className="reveal overflow-hidden rounded-lg border border-brand-blue/10 shadow-xl dark:border-white/10">
          <iframe
            title={`${t.contactPage.companyName} ${t.contactPage.mapTitleSuffix}`}
            src={MAP_SRC}
            className="h-72 w-full border-0 sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Info + form */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 xl:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-14">
          {/* Info cards */}
          <div className="reveal flex flex-col gap-5">
            {INFO_KEYS.map((key) => {
              const Icon = INFO_ICONS[key];
              const { label, lines } = t.contactPage.info[key];
              return (
                <div key={key} className="flex items-start gap-4 rounded-lg bg-brand-light p-6 dark:bg-brand-dark-surface-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-brand-navy dark:text-white">{label}</h3>
                    {lines.map((line) => (
                      <p key={line} className="mt-1 text-sm leading-relaxed text-brand-navy/70 dark:text-white/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div
            className="reveal rounded-lg border border-brand-blue/10 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-brand-dark-surface lg:p-10"
            style={{ transitionDelay: '120ms' }}
          >
            <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300">{t.contactPage.form.heading}</h2>
            <p className="mt-2 text-sm text-brand-navy/60 dark:text-white/60">{t.contactPage.form.sub}</p>

            {submitted ? (
              <div className="mt-8 rounded-md border border-brand-blue/20 bg-brand-light px-5 py-4 text-sm font-medium text-brand-navy dark:border-white/15 dark:bg-brand-dark-surface-2 dark:text-white">
                {t.contactPage.form.thanks}
              </div>
            ) : (
              <form className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-1.5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    {t.contactPage.form.name}
                  </span>
                  <input type="text" name="name" placeholder={t.contactPage.form.namePlaceholder} className={inputClass} required />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    {t.contactPage.form.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder={t.contactPage.form.emailPlaceholder}
                    className={inputClass}
                    required
                  />
                </label>

                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    {t.contactPage.form.phone}
                  </span>
                  <input type="tel" name="phone" placeholder={t.contactPage.form.phonePlaceholder} className={inputClass} />
                </label>

                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    {t.contactPage.form.message}
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t.contactPage.form.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110"
                  >
                    {t.contactPage.form.send}
                    <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
