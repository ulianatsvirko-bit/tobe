import { ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-[2] mx-auto flex min-h-[100dvh] w-full max-w-7xl flex-col justify-center px-5 pt-28 pb-12 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-12 bg-[var(--color-cherry)]"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            English Club · онлайн · мини-группы
          </span>
        </div>

        <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl">
          ToBe<span className="text-[var(--color-cherry)]">.</span> the main character.
        </h1>

        <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/90 sm:text-2xl">
          Разбираешься в моде, психологии и бизнесе — и параллельно прокачиваешь английский. Мини-группы до 5 человек, онлайн.
        </p>

        <p className="mt-4 font-serif text-lg italic text-white/70 sm:text-xl">
          Знаешь больше. Говоришь свободнее.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <button
            type="button"
            onClick={() => openLeadForm('Пробный урок')}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black hover:bg-[var(--color-cherry)] hover:text-white"
          >
            Бесплатный пробный урок
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="#club"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white hover:bg-white hover:text-black"
          >
            Клуб ToBe Talks
          </a>
        </div>
      </div>
    </section>
  );
}
