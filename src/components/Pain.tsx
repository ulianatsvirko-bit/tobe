import { XCircle, CheckCircle2 } from 'lucide-react';

const before = [
  'Учишь английский 10 лет, а заговорить страшно',
  'Знаешь правила, но в разговоре всё вылетает из головы',
  'Темы из учебника: погода, хобби, «моя семья»',
  'Хочется сказать что-то умное — а не о чем или нечем',
];

const after = [
  'Обсуждаешь то, что тебе правда интересно',
  'Узнаёшь новое о моде, психологии и бизнесе',
  'Говоришь с первого занятия — с опорами и шаблонами фраз',
  'Английский становится инструментом, а не предметом',
];

export default function Pain() {
  return (
    <section className="paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="kicker text-center text-[var(--color-cherry)]">Nº 01 · The problem</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl italic tracking-tight sm:text-6xl">
          Знакомо?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          Проблема обычно не в грамматике. Просто на уроках скучно — и говорить не о чем.
        </p>

        <figure className="mx-auto mt-10 max-w-3xl">
          <img src="/mood/newspapers.jpg" alt="Четыре девушки прячутся за газетами" className="bw aspect-[16/9] w-full object-cover" />
          <figcaption className="kicker mt-3 text-center text-gray-400">Когда учитель спрашивает: “Any questions?”</figcaption>
        </figure>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-sm border border-gray-200 bg-[var(--color-ivory)] p-6 sm:p-10">
            <img src="/mood/cat-curled.jpg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-6 -bottom-6 w-32 opacity-25 mix-blend-multiply sm:w-40" />
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">Обычный английский</p>
            <ul className="space-y-5">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
                  <span className="text-gray-600 sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm bg-[var(--color-ink)] p-6 text-white sm:p-10">
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--color-cherry-light)]">В ToBe.</p>
            <ul className="space-y-5">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-cherry-light)]" />
                  <span className="text-white/90 sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
