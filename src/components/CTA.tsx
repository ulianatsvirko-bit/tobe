import { ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-[var(--color-cherry)] py-16 text-white sm:py-24">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Знаешь больше.<br />
          <span className="font-serif italic">Говоришь свободнее.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Бесплатный пробный урок: определим уровень, попробуем задание по теме и подберём группу.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openLeadForm('Пробный урок')}
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-gray-900 hover:bg-gray-100"
          >
            Записаться на пробный урок
            <ArrowRight className="h-5 w-5" />
          </button>
          <a
            href="https://t.me/tsvirkouliana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-lg font-bold text-white hover:bg-white/10"
          >
            Задать вопрос в Telegram
          </a>
        </div>
        <p className="mt-6 font-serif text-sm italic text-white/70">Бесплатно и ни к чему не обязывает</p>
      </div>
    </section>
  );
}
