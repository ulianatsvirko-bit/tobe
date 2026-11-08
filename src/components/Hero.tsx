import { ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[var(--color-cherry-dark)] text-[var(--color-ivory)]"
      style={{
        backgroundImage: 'linear-gradient(105deg, rgba(42,7,12,0.82) 0%, rgba(42,7,12,0.55) 55%, rgba(42,7,12,0.35) 100%), url("/mood/velvet-floral.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative mx-auto grid min-h-[100dvh] w-full max-w-7xl items-center gap-10 px-5 pt-28 pb-14 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4 text-[var(--color-gold)]">
            <span className="kicker">Issue Nº 01</span>
            <span className="h-px w-10 bg-[var(--color-gold)]/60" />
            <span className="kicker">English Club · Online</span>
          </div>

          <h1 className="mt-6 font-serif leading-[0.9] tracking-tight">
            <span className="block text-7xl sm:text-8xl md:text-9xl">ToBe<span className="text-[var(--color-gold)]">.</span></span>
            <span className="mt-2 block text-4xl italic sm:text-6xl md:text-7xl">the main character.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/85 sm:text-xl">
            Разбираешься в моде, психологии и бизнесе — и параллельно прокачиваешь английский. Мини-группы до 5 человек, онлайн.
          </p>

          <p className="mt-5 font-serif text-xl italic text-[var(--color-gold)]">
            Знаешь больше. Говоришь свободнее.
          </p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={() => openLeadForm('Пробный урок')}
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-ivory)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-ink)] hover:bg-[var(--color-gold)]"
            >
              Бесплатный пробный урок
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#club"
              className="inline-flex items-center justify-center border border-white/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-white/10"
            >
              Клуб ToBe Talks
            </a>
          </div>
        </div>

        <figure className="relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="border border-[var(--color-gold)]/50 p-3">
            <img src="/method-photo.jpg" alt="Ульяна, основатель ToBe." className="bw aspect-[3/4] w-full object-cover" />
          </div>
          <figcaption className="kicker mt-4 text-center text-white/60">Ульяна · founder &amp; teacher</figcaption>
          <div className="absolute -top-5 -left-8 rotate-[-6deg] rounded-2xl rounded-bl-sm bg-[var(--color-ivory)] px-4 py-2 text-sm text-[var(--color-ink)] shadow-xl">
            heyyy, are you coming to class? ☕
          </div>
        </figure>
      </div>
    </section>
  );
}
