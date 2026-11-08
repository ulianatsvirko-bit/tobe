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
    <section id="season" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-cherry)]">Как устроено обучение</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">Сезон — 3 месяца</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            2 занятия в неделю по 90 минут. Каждый месяц — новая тема, в конце — проект, которым не стыдно поделиться.
          </p>
        </div>

        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <li
              key={step.label}
              className={`rounded-3xl p-6 ${idx === steps.length - 1 ? 'bg-[var(--color-cherry)] text-white' : 'border border-gray-200 bg-gray-50'}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest ${idx === steps.length - 1 ? 'text-white/70' : 'text-gray-400'}`}>{step.label}</p>
              <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${idx === steps.length - 1 ? 'text-white/90' : 'text-gray-600'}`}>{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-gray-900 p-6 text-center text-white sm:flex-row sm:justify-between sm:p-8 sm:text-left">
          <div>
            <p className="text-xl font-bold sm:text-2xl">Ближайший старт — январь 2027</p>
            <p className="mt-1 text-white/70">Одна группа · уровень A2–B1 · 5 мест</p>
          </div>
          <button
            type="button"
            onClick={() => openLeadForm('Групповой формат')}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-gray-900 hover:bg-gray-100"
          >
            Забронировать место
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
