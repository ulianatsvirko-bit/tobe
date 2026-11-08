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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight sm:text-5xl">
          Знакомо?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
          Проблема обычно не в грамматике. Просто на уроках скучно — и говорить не о чем.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-10">
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

          <div className="rounded-3xl bg-gray-900 p-6 text-white sm:p-10">
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
