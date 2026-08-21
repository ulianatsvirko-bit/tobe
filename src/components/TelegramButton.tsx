import { Send } from 'lucide-react';

export default function TelegramButton() {
  return (
    <a
      href="https://t.me/tsvirkouliana"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Задать вопрос в Telegram"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-cherry)] text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[var(--color-cherry-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-cherry)]"
    >
      <Send className="h-6 w-6" />
    </a>
  );
}
