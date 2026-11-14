import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--color-wine-deep)] pt-14 text-[var(--color-paper)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <p className="font-serif text-xl italic text-white/70">Не учим язык. Учимся на нём.</p>
        <div className="flex gap-3">
          <a href="https://instagram.com/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-white/10">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://t.me/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 hover:bg-white/10">
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="relative mt-12 select-none text-center" aria-hidden="true">
        <p className="display text-[26vw] leading-[0.78] text-[var(--color-blush)]/90">tobe.</p>
        <p className="script absolute left-1/2 top-[55%] -translate-x-1/2 whitespace-nowrap text-[8vw] text-white">the main character</p>
      </div>
      <p className="pt-6 pb-6 text-center text-xs text-white/40">© {new Date().getFullYear()} ToBe. English Club</p>
    </footer>
  );
}
