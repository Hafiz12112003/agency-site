export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          Pixel<span className="text-indigo-500">forge</span>
        </a>
        <p>&copy; 2026 Pixelforge Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="transition hover:text-indigo-500">Services</a>
          <a href="#portfolio" className="transition hover:text-indigo-500">Portfolio</a>
          <a href="#contact" className="transition hover:text-indigo-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}
