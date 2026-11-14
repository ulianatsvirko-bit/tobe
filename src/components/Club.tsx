import { openLeadForm } from '../lead-form';
import { Title, Polaroid } from './ui';

export default function Club() {
  return (
    <section id="club" className="velvet relative overflow-hidden py-20 text-[var(--color-paper)] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Title kicker="nº 06 · разговорный клуб" caps="tobe" script="talks" tone="light" />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-white/75">
          Хочешь сначала попробовать? Приходи в клуб: одна тема, живое обсуждение на английском и люди, которым тоже интересно.
        </p>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1fr_1.2fr_1fr]">
          <div className="relative mx-auto hidden h-80 w-full max-w-xs lg:block">
            <Polaroid src="/mood/whisper.jpg" alt="Подруги шепчутся" caption="«клуб бесплатный?!»" rotate={-7} bw imgClassName="aspect-[4/3]" className="absolute left-0 top-0 w-full" />
            <span className="bubble absolute -right-6 -top-8 z-10 rotate-3">see you at tobe talks? 💋</span>
          </div>

          {/* envelope invitation */}
          <div className="relative mx-auto w-full max-w-md pt-16">
            <div className="absolute inset-x-0 bottom-0 h-[78%] rounded-md bg-[var(--color-blush-deep)] shadow-2xl" />
            <div className="relative z-10 mx-5 -rotate-2 bg-[var(--color-paper)] px-7 pt-7 pb-20 text-center text-[var(--color-ink)] shadow-xl">
              <p className="kicker text-[var(--color-wine)]">you're invited</p>
              <p className="script mt-2 text-5xl text-[var(--color-wine)]">tobe talks online</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink)]/75">
                60 минут в Zoom · до 12 человек · раз в 2 недели. Тема, например: «Почему мы покупаем то, что не носим?». Уровень от A2.
              </p>
              <p className="display mt-4 text-3xl text-[var(--color-wine)]">free</p>
              <button
                type="button"
                onClick={() => openLeadForm('Клуб ToBe Talks')}
                className="mt-5 w-full rounded-full bg-[var(--color-wine)] px-6 py-3.5 font-semibold text-[var(--color-paper)] hover:bg-[var(--color-wine-deep)]"
              >
                записаться в клуб →
              </button>
            </div>
            <div
              className="pointer-events-none relative z-20 -mt-16 h-24 bg-[var(--color-blush)] shadow-[0_-8px_20px_-12px_rgba(0,0,0,0.4)]"
              style={{ clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)' }}
            />
            <div className="pointer-events-none absolute left-1/2 bottom-8 z-30 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-[var(--color-wine)] text-xl shadow-lg ring-4 ring-[var(--color-wine)]/30">💋</div>
          </div>

          <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-8">
            <Polaroid src="/mood/coffee.jpg" alt="Чашка кофе со следом помады" caption="live · минск · soon" rotate={6} tape imgClassName="aspect-square" className="w-[80%]" />
            <p className="text-center text-sm leading-relaxed text-white/75">
              <span className="script block text-3xl text-[var(--color-blush)]">tobe talks live</span>
              Встречи вживую в кофейнях Минска: fashion swap на английском, питчи идей. Анонсы — в{' '}
              <a href="https://instagram.com/tsvirkouliana" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
