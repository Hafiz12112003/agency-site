import Reveal from "./Reveal";
import { DesignIcon, CodeIcon, BrandIcon, GrowthIcon } from "./Icons";

const services = [
  {
    Icon: DesignIcon,
    title: "UI/UX Design",
    description:
      "Research-led interfaces and prototypes that feel intuitive and look great on every screen.",
    gradient: "from-fuchsia-500 to-orange-400",
    glow: "bg-fuchsia-500/30",
  },
  {
    Icon: CodeIcon,
    title: "Web Development",
    description:
      "Fast, accessible and scalable websites and web apps built with modern frameworks.",
    gradient: "from-cyan-400 to-indigo-500",
    glow: "bg-cyan-400/30",
  },
  {
    Icon: BrandIcon,
    title: "Branding",
    description:
      "Logos, color systems and brand guidelines that make your business instantly recognizable.",
    gradient: "from-amber-400 to-rose-500",
    glow: "bg-amber-400/30",
  },
  {
    Icon: GrowthIcon,
    title: "Digital Marketing",
    description:
      "SEO, content and campaigns that bring the right audience to your product.",
    gradient: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-400/30",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          What we do
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Services built around{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            your goals
          </span>
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          From the first idea to the final launch, we cover everything your brand needs online.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 120} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition duration-500 group-hover:scale-150 ${s.glow}`}
              />
              <span className="absolute right-6 top-5 text-5xl font-black text-slate-100 dark:text-slate-800">
                0{i + 1}
              </span>
              <div
                className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110 ${s.gradient}`}
              >
                <s.Icon className="h-9 w-9" />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.description}
              </p>
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${s.gradient}`}
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
