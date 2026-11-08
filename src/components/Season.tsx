import { openLeadForm } from '../lead-form';
import { Title } from './ui';

const steps = [
  { label: 'month 01', title: 'fashion & style', desc: 'Индустрия моды, бренды, стиль и культура.' },
  { label: 'month 02', title: 'psychology', desc: 'Решения, привычки, эмоции и общение.' },
  { label: 'month 03', title: 'business', desc: 'Бренды, стартапы, карьера и переговоры.' },
  { label: 'final', title: 'твой проект', desc: 'Презентуешь на английском свою идею — коллекцию, исследование или бизнес.' },
];

export default function Season() {
  return (
    <section id="season" className="relative bg-[var(--color-blush)] pb-20 sm:pb-28" style={{ ['--scallop' as string]: 'var(--color-blush)' }}>
      <div className="scallop" />
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <Title kicker="nº 04 · как устроено обучение" caps="один сезон" script="три месяца" />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-[var(--color-ink)]/70">
          2 занятия в неделю по 90 минут. Каждый месяц — новая тема, в конце — проект, которым не стыдно поделиться.
        </p>

        <ol className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => {
            const last = idx === steps.length - 1;
            return (
              <li key={step.label} className={`ticket px-8 py-7 ${last ? 'velvet text-[var(--color-paper)]' : 'bg-[var(--color-paper)]'}`}>
                <p className={`kicker ${last ? 'text-[var(--color-gold)]' : 'text-[var(--color-wine)]'}`}>{step.label}</p>
                <h3 className={`script mt-2 text-4xl ${last ? 'text-[var(--color-blush)]' : 'text-[var(--color-wine)]'}`}>{step.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${last ? 'text-white/85' : 'text-[var(--color-ink)]/70'}`}>{step.desc}</p>
              </li>
            );
          })}
        </ol>

        <img
          src="/mood/finish-what-you-start.jpg"
          alt="Коллаж из небоскрёбов с надписью Finish what you start"
          className="mx-auto mt-12 w-full max-w-5xl mix-blend-multiply"
        />

        <div className="ticket mx-auto mt-4 flex max-w-4xl flex-col items-center gap-5 bg-[var(--color-ink)] px-10 py-8 text-center text-[var(--color-paper)] sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="kicker text-[var(--color-gold)]">admit one · season 01</p>
            <p className="script mt-1 text-5xl text-[var(--color-blush)]">старт — январь 2027</p>
            <p className="mt-1 text-white/70">одна группа · уровень A2–B1 · 5 мест</p>
          </div>
          <button
            type="button"
            onClick={() => openLeadForm('Групповой формат')}
            className="shrink-0 rounded-full bg-[var(--color-blush)] px-7 py-3.5 font-semibold text-[var(--color-wine)] hover:bg-white"
          >
            забронировать место →
          </button>
        </div>
      </div>
    </section>
  );
}
