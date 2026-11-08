import { ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[var(--color-cherry-dark)] py-16 text-white sm:py-24"
      style={{
        backgroundImage: 'linear-gradient(rgba(42,7,12,0.72), rgba(42,7,12,0.82)), url("/mood/leopards.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-5xl leading-tight tracking-tight sm:text-7xl">
          Знаешь больше.<br />
          <span className="italic text-[var(--color-gold)]">Говоришь свободнее.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
          Бесплатный пробный урок: определим уровень, попробуем задание по теме и подберём группу.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openLeadForm('Пробный урок')}
            className="inline-flex items-center gap-3 rounded-none bg-[var(--color-ivory)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] hover:bg-[var(--color-gold)]"
          >
            Записаться на пробный урок
            <ArrowRight className="h-5 w-5" />
          </button>
          <a
            href="https://t.me/tsvirkouliana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-none border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
          >
            Задать вопрос в Telegram
          </a>
        </div>
        <p className="mt-6 font-serif text-sm italic text-white/70">Бесплатно и ни к чему не обязывает</p>
      </div>
    </section>
  );
}
