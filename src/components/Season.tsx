import { openLeadForm } from '../lead-form';
import { Title, card, section, btnPrimary } from './ui';

const steps = [
  { label: 'Месяц 1', title: 'Fashion & Style', desc: 'Индустрия моды, бренды, стиль и культура.' },
  { label: 'Месяц 2', title: 'Psychology', desc: 'Решения, привычки, эмоции и общение.' },
  { label: 'Месяц 3', title: 'Business', desc: 'Бренды, стартапы, карьера и переговоры.' },
  { label: 'Финал', title: 'Твой проект', desc: 'Презентуешь на английском свою идею — коллекцию, исследование или бизнес.' },
];

export default function Season() {
  return (
    <section id="season" className="paper py-24 sm:py-32">
      <div className={section}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Title n="04" label="Как устроено обучение" accent="три месяца">Один сезон —</Title>
          <p className="max-w-sm text-lg leading-relaxed text-[var(--color-ink)]/70">
            2 занятия в неделю по 90 минут. Каждый месяц — новая тема, в конце — проект, которым не стыдно поделиться.
          </p>
        </div>

        <ol className="mt-14 grid gap-px bg-[var(--color-ink)]/10 md:grid-cols-4">
          {steps.map((step, idx) => {
            const last = idx === steps.length - 1;
            return (
              <li key={step.label} className={`p-7 ${last ? 'bg-[var(--color-wine)] text-[var(--color-paper)]' : 'bg-[var(--color-paper)]'}`}>
                <p className={`kicker ${last ? 'text-[var(--color-blush)]/80' : 'text-[var(--color-wine)]'}`}>{step.label}</p>
                <h3 className="mt-3 font-serif text-2xl font-medium italic">{step.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${last ? 'text-white/80' : 'text-[var(--color-ink)]/65'}`}>{step.desc}</p>
              </li>
            );
          })}
        </ol>

        <div className={`${card} mt-6 flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:justify-between`}>
          <div>
            <p className="font-serif text-3xl font-medium">Старт — <em className="text-[var(--color-wine)]">январь 2027</em></p>
            <p className="mt-1 text-[var(--color-ink)]/60">Одна группа · уровень A2–B1 · 5 мест</p>
          </div>
          <button type="button" onClick={() => openLeadForm('Групповой формат')} className={btnPrimary}>
            Забронировать место
          </button>
        </div>
      </div>
    </section>
  );
}
