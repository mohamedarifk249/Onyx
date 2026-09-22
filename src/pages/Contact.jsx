import { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from '../components/ContactIcons';
import usePageMeta from '../hooks/usePageMeta';

// Formspree endpoint — delivers every submission straight to
// contact@onyxethiopia.com as an email. No backend of our own: Formspree is
// the "server" here. Replace FORMSPREE_FORM_ID with the real form ID from
// https://formspree.io once the account/form is created for this address.
const FORMSPREE_FORM_ID = 'xjykweoo';
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

const MAP_QUERY = 'Onyx For Engineering And Integrated Solutions PLC, Afework Building, Addis Ababa, Ethiopia';
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
const MAP_TITLE = 'Onyx For Engineering And Integrated Solutions PLC on Google Maps';

const INFO_ITEMS = [
  { key: 'address', label: 'Address', lines: ['Afework Building, 2nd Floor', 'Addis Ababa, Ethiopia'], Icon: PinIcon },
  { key: 'email', label: 'Email', lines: ['contact@onyxethiopia.com'], Icon: MailIcon },
  { key: 'phone', label: 'Phone', lines: ['+251 (0) 115 22 6060'], Icon: PhoneIcon },
  { key: 'hours', label: 'Working Hours', lines: ['Mon – Fri, 8:30 AM – 5:30 PM'], Icon: ClockIcon },
];

const inputClass =
  'w-full rounded-md border border-brand-blue/20 bg-white px-4 py-2.5 text-sm text-brand-navy placeholder:text-brand-navy/40 outline-none transition-colors duration-300 focus:border-brand-blue dark:border-white/15 dark:bg-brand-dark-surface-2 dark:text-white dark:placeholder:text-white/40';

export default function Contact() {
  usePageMeta(
    'Contact Us',
    'Get in touch with the Onyx engineering team about your instrumentation, measurement, calibration, or industrial automation project in Ethiopia.'
  );
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    setStatus('sending');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Page banner */}
      <section className="bg-brand-light py-16 dark:bg-brand-dark-surface-2 lg:py-20">
        <div className="reveal mx-auto max-w-4xl px-6 text-center lg:px-12 xl:px-16">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-orange">Get In Touch</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-tight text-brand-navy dark:text-white sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-navy/80 dark:text-white/75">
            Have an instrumentation or automation challenge? Talk to our engineering team about your measurement
            requirements, instrumentation needs, calibration requirements, or industrial automation project.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-12 xl:px-16 lg:pt-20">
        <div className="reveal overflow-hidden rounded-lg border border-brand-blue/10 shadow-xl dark:border-white/10">
          <iframe
            title={MAP_TITLE}
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
            {INFO_ITEMS.map(({ key, label, lines, Icon }) => (
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
            ))}
          </div>

          {/* Form */}
          <div
            className="reveal rounded-lg border border-brand-blue/10 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-brand-dark-surface lg:p-10"
            style={{ transitionDelay: '120ms' }}
          >
            <h2 className="font-heading text-2xl font-bold text-brand-blue dark:text-sky-300">Send Us A Message</h2>
            <p className="mt-2 text-sm text-brand-navy/60 dark:text-white/60">
              Fill out the form and our team will respond within one business day.
            </p>

            {status === 'sent' ? (
              <div className="mt-8 rounded-md border border-brand-blue/20 bg-brand-light px-5 py-4 text-sm font-medium text-brand-navy dark:border-white/15 dark:bg-brand-dark-surface-2 dark:text-white">
                Thank you — your message has been received. We'll be in touch soon.
              </div>
            ) : (
              <form className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-1.5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    Name
                  </span>
                  <input type="text" name="name" placeholder="Add your name" className={inputClass} required />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter a valid email"
                    className={inputClass}
                    required
                  />
                </label>

                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    Phone
                  </span>
                  <input type="tel" name="phone" placeholder="Add your phone number" className={inputClass} />
                </label>

                <label className="flex flex-col gap-1.5 sm:col-span-2">
                  <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy dark:text-white/85">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project"
                    className={`${inputClass} resize-none`}
                    required
                  />
                </label>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 font-heading text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-md"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                    <ArrowIcon className="h-7 w-7 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {status === 'error' && (
                    <p className="mt-3 text-sm font-medium text-red-600 dark:text-red-400">
                      Something went wrong sending your message. Please try again, or email us directly at{' '}
                      <a href="mailto:contact@onyxethiopia.com" className="underline">
                        contact@onyxethiopia.com
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
