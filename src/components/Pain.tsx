import { Title, Photo, card, section } from './ui';

const before = [
  'Учишь английский 10 лет, а заговорить страшно',
  'Знаешь правила, но в разговоре всё вылетает из головы',
  'Темы из учебника: погода, хобби, «моя семья»',
  'Хочется сказать что-то умное — а не о чем',
];

const after = [
  'Обсуждаешь то, что тебе правда интересно',
  'Узнаёшь новое о моде, психологии и бизнесе',
  'Говоришь с первого занятия — с опорами и шаблонами фраз',
  'Английский становится инструментом, а не предметом',
];

export default function Pain() {
  return (
    <section className="paper py-24 sm:py-32">
      <div className={`${section} grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center`}>
        <div>
          <Title n="01" label="Знакомо?" accent="и говорить не о чем">Учишь годами,</Title>
          <Photo src="/mood/satc.jpg" alt="Скучающие подруги" caption="Мы на обычном уроке английского" tilt={-1.5} ratio="aspect-[16/10]" className="mt-12 max-w-lg" />
        </div>

        <div className="grid gap-5">
          <div className={`${card} p-8`}>
            <p className="kicker text-[var(--color-ink)]/45">Обычный английский</p>
            <ul className="mt-5 space-y-3 text-[17px] text-[var(--color-ink)]/55">
              {before.map((item) => (
                <li key={item} className="line-through decoration-[var(--color-wine)]/50">{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--color-wine)] p-8 text-[var(--color-paper)]">
            <p className="kicker text-[var(--color-blush)]/80">В ToBe.</p>
            <ul className="mt-5 space-y-3 text-[17px]">
              {after.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[var(--color-blush)]">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
