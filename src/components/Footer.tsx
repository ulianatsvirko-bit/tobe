import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[var(--color-wine)] pt-14 text-[var(--color-paper)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="script text-4xl text-[var(--color-blush)]">не учим язык. учимся на нём.</p>
          <p className="mt-2 text-sm text-white/55">онлайн · мини-группы · Минск и весь мир</p>
        </div>
        <div className="flex gap-3">
          <a href="https://instagram.com/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-[var(--color-blush)] hover:text-[var(--color-wine)]">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://t.me/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="grid h-12 w-12 place-items-center rounded-full bg-white/10 hover:bg-[var(--color-blush)] hover:text-[var(--color-wine)]">
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="relative mt-10 select-none px-2 text-center" aria-hidden="true">
        <p className="display text-[27vw] leading-[0.75] text-[var(--color-blush)]">tobe.</p>
        <p className="script absolute left-1/2 top-1/2 -translate-x-1/2 -rotate-6 whitespace-nowrap text-[9vw] text-white">the main character</p>
      </div>
      <p className="pt-4 pb-6 text-center text-xs text-white/40">© {new Date().getFullYear()} ToBe. English Club</p>
    </footer>
  );
}
