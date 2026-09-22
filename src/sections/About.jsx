import aboutImg from '../assets/images/about-teaser.jpg';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 xl:px-16 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal">
          <h2 className="font-heading text-3xl font-bold text-brand-blue dark:text-sky-300 sm:text-4xl">
            About The Company
          </h2>
          <h3 className="mt-2 font-heading text-2xl font-semibold text-brand-blue dark:text-sky-300">
            Trusted By Industry
          </h3>
          <p className="mt-6 leading-relaxed text-brand-blue/90 dark:text-white/80">
            Onyx is a process automation solutions provider specializing in industrial instrumentation,
            measurement, and engineering services. We help process industries measure, control, monitor, and
            improve their operations through reliable instrumentation, engineering expertise, and integrated
            automation solutions. With experience in the Ethiopian industrial market since 2012, Onyx combines
            local engineering capability with world-class Endress+Hauser technology and expertise to deliver
            practical solutions tailored to our customers' processes.
          </p>
        </div>

        <div className="reveal relative" style={{ transitionDelay: '150ms' }}>
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl sm:aspect-[16/11] lg:aspect-auto">
            <img
              src={aboutImg}
              alt="Onyx instrumentation on a rooftop installation overlooking Addis Ababa"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
