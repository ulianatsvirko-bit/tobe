import { ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

const steps = [
  { label: 'Месяц 1', title: 'Fashion & Style', desc: 'Индустрия моды, бренды, стиль и культура.' },
  { label: 'Месяц 2', title: 'Psychology', desc: 'Решения, привычки, эмоции и общение.' },
  { label: 'Месяц 3', title: 'Business', desc: 'Бренды, стартапы, карьера и переговоры.' },
  { label: 'Финал', title: 'Твой проект', desc: 'Презентуешь на английском собственную идею — коллекцию, исследование или бизнес.' },
];

export default function Season() {
  return (
    <section id="season" className="paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="kicker text-[var(--color-cherry)]">Nº 04 · Как устроено обучение</span>
          <h2 className="mt-2 text-4xl italic tracking-tight sm:text-6xl">Сезон: 3 месяца</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            2 занятия в неделю по 90 минут. Каждый месяц — новая тема, в конце — проект, которым не стыдно поделиться.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <li
              key={step.label}
              className={`rounded-sm p-6 ${idx === steps.length - 1 ? 'velvet text-white' : 'border border-[var(--color-ink)]/10 bg-[var(--color-ivory)]'}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest ${idx === steps.length - 1 ? 'text-white/70' : 'text-gray-400'}`}>{step.label}</p>
              <h3 className="mt-2 font-serif text-2xl italic">{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${idx === steps.length - 1 ? 'text-white/90' : 'text-gray-600'}`}>{step.desc}</p>
            </li>
          ))}
        </ol>

        <img
          src="/mood/finish-what-you-start.jpg"
          alt="Коллаж из небоскрёбов с надписью Finish what you start"
          className="mt-10 w-full object-contain mix-blend-multiply"
        />

        <div className="mt-6 flex flex-col items-center gap-4 rounded-sm bg-[var(--color-ink)] p-6 text-center text-white sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div>
            <p className="font-serif text-2xl italic sm:text-3xl">Ближайший старт — январь 2027</p>
            <p className="mt-1 text-white/70">Одна группа · уровень A2–B1 · 5 мест</p>
          </div>
          <button
            type="button"
            onClick={() => openLeadForm('Групповой формат')}
            className="inline-flex shrink-0 items-center gap-2 rounded-none bg-white px-6 py-3.5 font-bold text-gray-900 hover:bg-gray-100"
          >
            Забронировать место
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
