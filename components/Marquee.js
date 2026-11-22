const items = ["Brand identity", "Web design", "Next.js builds", "Motion", "Design systems", "SEO", "Packaging", "Art direction"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#16140f] py-5 text-[#f4efe6]">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="font-display flex items-center gap-10 text-3xl italic">
            {t}
            <span className="h-2.5 w-2.5 rotate-45 bg-[#ff5a36]" />
          </span>
        ))}
      </div>
    </div>
  );
}
