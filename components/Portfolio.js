import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";

const projects = [
  { title: "Nova Fintech App", category: "UI/UX Design", year: "2026", tags: ["Mobile", "Fintech"], image: "/portfolio/nova.svg", span: "lg:col-span-7" },
  { title: "Bloom Beauty Store", category: "Web Development", year: "2025", tags: ["E-commerce", "Next.js"], image: "/portfolio/bloom.svg", span: "lg:col-span-5" },
  { title: "Atlas Travel Brand", category: "Branding", year: "2025", tags: ["Identity", "Poster"], image: "/portfolio/atlas.svg", span: "lg:col-span-5" },
  { title: "Terra Organic Foods", category: "Digital Marketing", year: "2024", tags: ["Packaging", "Campaign"], image: "/portfolio/terra.svg", span: "lg:col-span-7" },
  { title: "Pulse Fitness Tracker", category: "UI/UX Design", year: "2024", tags: ["Wearable", "App"], image: "/portfolio/pulse.svg", span: "lg:col-span-6" },
  { title: "Orbit SaaS Dashboard", category: "Web Development", year: "2023", tags: ["Dashboard", "Analytics"], image: "/portfolio/orbit.svg", span: "lg:col-span-6" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#0c0c0f] py-24 text-[#f4efe6] sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ff5a36]">
              Selected work (06)
            </p>
            <h2 className="font-display mt-4 text-5xl leading-[0.95] sm:text-7xl">
              Work we&apos;d put
              <br />
              our name <span className="italic text-[#ff5a36]">on.</span>
            </h2>
          </div>
          <p className="max-w-sm opacity-60 lg:col-span-4 lg:justify-self-end">
            A handful of products and brands from the last few years, each built from a blank page
            to a live launch.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-14 lg:grid-cols-12">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 120} className={p.span}>
              <article className="group cursor-pointer">
                <div className="relative h-72 overflow-hidden rounded-3xl sm:h-96 lg:h-[27rem]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#0c0c0f]/70 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    {p.category}
                  </span>
                  <span className="absolute right-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f4efe6] text-[#16140f] transition duration-300 group-hover:bg-[#ff5a36]">
                    <ArrowIcon className="h-6 w-6 -rotate-45 transition duration-300 group-hover:rotate-0" />
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#ff5a36]">
                      0{i + 1} / {p.year}
                    </p>
                    <h3 className="font-display mt-2 text-3xl transition group-hover:italic sm:text-4xl">
                      {p.title}
                    </h3>
                  </div>
                  <ul className="mt-6 hidden flex-wrap justify-end gap-2 sm:flex">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/20 px-3 py-1 text-xs opacity-70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
