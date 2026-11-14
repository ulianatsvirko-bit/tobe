import { openLeadForm } from '../lead-form';
import { Title, Photo, section, btnPrimaryOnDark } from './ui';

export default function Club() {
  return (
    <section id="club" className="velvet py-24 text-[var(--color-paper)] sm:py-32">
      <div className={`${section} grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center`}>
        <div>
          <Title n="06" label="Разговорный клуб" accent="Talks" tone="dark">ToBe</Title>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-white/80">
            Хочешь сначала попробовать? Приходи в клуб: одна тема, живое обсуждение на английском и люди, которым тоже интересно.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 divide-x divide-white/15 border-y border-white/15">
            {[
              ['60 мин', 'в Zoom'],
              ['до 12', 'участников'],
              ['бесплатно', 'раз в 2 недели'],
            ].map(([v, l]) => (
              <div key={l} className="py-4 pl-4 first:pl-0">
                <dt className="font-serif text-2xl">{v}</dt>
                <dd className="mt-1 text-sm text-white/60">{l}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-md text-white/70">
            Например: «Почему мы покупаем то, что не носим?». Нужен уровень от A2.
          </p>
          <button type="button" onClick={() => openLeadForm('Клуб ToBe Talks')} className={`${btnPrimaryOnDark} mt-8`}>
            Записаться в клуб
          </button>

          <p className="mt-10 max-w-md border-t border-white/15 pt-6 text-sm leading-relaxed text-white/65">
            <span className="font-serif text-lg italic text-[var(--color-blush)]">Скоро — ToBe Talks Live в Минске.</span>
            <br />
            Встречи вживую в кофейнях. Анонсы — в{' '}
            <a href="https://instagram.com/tsvirkouliana" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <Photo src="/mood/icons-trio.jpg" alt="Три иконы стиля" caption="Main character energy" tilt={2} ratio="aspect-[4/3]" />
          <span className="bubble absolute -left-6 -bottom-5">see you at ToBe Talks? 💋</span>
        </div>
      </div>
    </section>
  );
}
