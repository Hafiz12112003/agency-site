import { ArrowIcon } from "./Icons";

const facts = [
  { value: "120+", label: "Projects shipped" },
  { value: "45", label: "Brands launched" },
  { value: "8", label: "Years in the craft" },
];

function Tile({ className = "", children }) {
  return (
    <div
      className={`group relative aspect-square overflow-hidden rounded-2xl transition duration-500 hover:z-10 hover:-rotate-2 hover:scale-[1.05] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#f4efe6] text-[#16140f] dark:bg-[#0c0c0f] dark:text-[#f4efe6]"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-20 pt-14 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-black/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest dark:border-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Booking projects for Q1 2027
          </div>

          <h1 className="font-display mt-8 text-[clamp(3rem,7vw,6.25rem)] leading-[0.95] tracking-tight">
            We make brands
            <br />
            <span className="relative inline-block italic text-[#ff5a36]">
              impossible
              <svg
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-3 w-full"
                fill="none"
              >
                <path
                  d="M2 14 Q 22 2 42 14 T 82 14 T 122 14 T 162 14 T 202 14 T 242 14 T 298 14"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            to scroll past.
          </h1>

          <p className="mt-8 max-w-md text-lg opacity-70">
            Pixelforge is an independent design and development studio. We shape identities,
            interfaces and websites that look sharp and load fast.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#16140f] px-8 py-4 text-sm font-semibold text-[#f4efe6] transition hover:bg-[#ff5a36] hover:text-[#16140f] dark:bg-[#f4efe6] dark:text-[#16140f] dark:hover:bg-[#ff5a36]"
            >
              Get Started
              <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="text-sm font-semibold underline decoration-[#ff5a36] decoration-2 underline-offset-8 transition hover:text-[#ff5a36]"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="grid grid-cols-3 gap-3">
            <Tile className="bg-[#ff5a36]">
              <div className="absolute inset-x-0 bottom-0 h-1/2 rounded-t-full bg-[#16140f] transition-all duration-500 group-hover:h-3/4" />
            </Tile>

            <Tile className="bg-[#4f46e5]">
              <div className="absolute left-1/2 top-1/2 h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 animate-float rounded-full bg-[#ffd23f]" />
            </Tile>

            <Tile className="bg-[#16140f] dark:bg-[#f4efe6]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" fill="none">
                <circle cx="50" cy="50" r="14" stroke="#ff5a36" strokeWidth="6" />
                <circle cx="50" cy="50" r="27" stroke="#ff5a36" strokeWidth="6" />
                <circle cx="50" cy="50" r="40" stroke="#ff5a36" strokeWidth="6" />
              </svg>
            </Tile>

            <Tile className="bg-[#ffd23f]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #16140f 0 6px, transparent 6px 18px)",
                }}
              />
            </Tile>

            <Tile className="bg-[#f4efe6] ring-2 ring-inset ring-[#16140f] dark:bg-[#0c0c0f] dark:ring-[#f4efe6]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full animate-spin-slow p-4 text-[#4f46e5]"
              >
                <path
                  d="M50 4 L61 39 L96 50 L61 61 L50 96 L39 61 L4 50 L39 39 Z"
                  fill="currentColor"
                />
              </svg>
            </Tile>

            <Tile className="bg-[#4f46e5]">
              <div className="absolute left-0 top-0 h-1/2 w-1/2 rounded-br-full bg-[#f4efe6]" />
              <div className="absolute bottom-0 right-0 h-1/2 w-1/2 rounded-tl-full bg-[#ff5a36]" />
            </Tile>

            <Tile className="bg-[#ff9ec4]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(#16140f 22%, transparent 24%)",
                  backgroundSize: "22px 22px",
                }}
              />
            </Tile>

            <Tile className="bg-[#16140f] dark:bg-[#f4efe6]">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f4efe6] dark:text-[#16140f]">
                <span className="font-display text-5xl italic leading-none sm:text-6xl">PF</span>
                <span className="mt-2 text-[10px] font-semibold uppercase tracking-widest opacity-70">
                  Est. 2018
                </span>
              </div>
            </Tile>

            <Tile className="bg-[#ff5a36]">
              <div
                className="absolute inset-0 bg-[#f4efe6]"
                style={{ clipPath: "polygon(50% 14%, 90% 86%, 10% 86%)" }}
              />
            </Tile>
          </div>

          <div className="absolute -bottom-10 -left-8 hidden h-32 w-32 items-center justify-center rounded-full bg-[#f4efe6] sm:flex dark:bg-[#0c0c0f]">
            <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
              <defs>
                <path id="circ" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
              </defs>
              <text fontSize="10" fontWeight="700" fill="currentColor" textLength="272" lengthAdjust="spacing">
                <textPath href="#circ">AVAILABLE FOR NEW PROJECTS • </textPath>
              </text>
            </svg>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a36] text-[#16140f]">
              <ArrowIcon className="h-6 w-6 -rotate-45" />
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <dl className="grid grid-cols-3 border-t border-black/15 dark:border-white/15">
          {facts.map((f) => (
            <div key={f.label} className="py-7">
              <dt className="font-display text-4xl sm:text-6xl">{f.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-widest opacity-60 sm:text-sm">
                {f.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
