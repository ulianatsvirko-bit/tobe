import { Instagram, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif font-bold mb-2">ToBe<span className="text-[var(--color-cherry)]">.</span> CLIL Academy</h2>
          <p className="text-gray-400 italic">Ваш путь к себе.</p>
        </div>

        <div className="flex gap-4">
          <a href="https://instagram.com/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-4 rounded-full bg-white/5 hover:bg-[var(--color-cherry)] transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>
          <a href="https://t.me/tsvirkouliana" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="p-4 rounded-full bg-white/5 hover:bg-[var(--color-cherry)] transition-colors group min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Send className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ToBe. CLIL Academy. All rights reserved.
      </div>
    </footer>
  );
}
