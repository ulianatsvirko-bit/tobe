import { openLeadForm } from '../lead-form';
import { Title } from './ui';

const plans = [
  {
    title: 'Групповой формат',
    label: 'mini-group',
    script: 'в компании',
    price: '250 BYN',
    rub: '≈ 6 900 ₽',
    features: ['8 занятий в месяц, 2 × 90 минут в неделю', 'группа до 5 человек', 'сезон 3 месяца с финальным проектом', 'бесплатный клуб ToBe Talks'],
    main: true,
  },
  {
    title: 'Индивидуальный формат',
    label: 'one-to-one',
    script: 'только ты',
    price: '380 BYN',
    rub: '≈ 10 500 ₽',
    features: ['8 занятий в месяц, 2 × 60 минут в неделю', 'темы под твои интересы и цели', 'гибкий график', 'бесплатный клуб ToBe Talks'],
    main: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="paper relative overflow-hidden py-20 sm:py-28">
      <img src="/mood/cheetahs.jpg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-10 top-10 hidden w-64 -rotate-6 opacity-90 mix-blend-multiply lg:block" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Title kicker="nº 07 · prices" caps="форматы" script="и стоимость" />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-[var(--color-ink)]/70">
          Начни с бесплатного пробного урока — подберём формат и группу по уровню.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.title} className={`ticket flex flex-col px-9 py-9 ${plan.main ? 'velvet text-[var(--color-paper)]' : 'bg-[var(--color-blush)] text-[var(--color-ink)]'}`}>
              <div className="flex items-center justify-between">
                <p className={`kicker ${plan.main ? 'text-[var(--color-gold)]' : 'text-[var(--color-wine)]'}`}>{plan.label}</p>
                {plan.main && <span className="pill bg-[var(--color-gold)] text-[var(--color-ink)]">основной</span>}
              </div>
              <h3 className="caps mt-4 text-3xl">{plan.title}</h3>
              <p className={`script text-4xl ${plan.main ? 'text-[var(--color-blush)]' : 'text-[var(--color-wine)]'}`}>{plan.script}</p>

              <div className={`my-6 border-t border-dashed ${plan.main ? 'border-white/30' : 'border-[var(--color-wine)]/30'}`} />

              <p className="display text-6xl normal-case">{plan.price}</p>
              <p className={`mt-1 text-sm ${plan.main ? 'text-white/70' : 'text-[var(--color-ink)]/60'}`}>в месяц · {plan.rub}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px]">
                    <span className={plan.main ? 'text-[var(--color-gold)]' : 'text-[var(--color-wine)]'}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openLeadForm(plan.title)}
                className={`mt-8 rounded-full px-6 py-4 font-semibold ${plan.main ? 'bg-[var(--color-blush)] text-[var(--color-wine)] hover:bg-white' : 'bg-[var(--color-wine)] text-[var(--color-paper)] hover:bg-[var(--color-wine-deep)]'}`}
              >
                записаться на пробный урок →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="notebook tape -rotate-1">
            <p className="script text-4xl text-[var(--color-wine)]">гарантия первого месяца</p>
            <p className="mt-2 leading-8 text-[var(--color-ink)]/75">Если после первого занятия в группе поймёшь, что формат не твой, вернём деньги за оставшиеся занятия месяца.</p>
          </div>
          <div className="notebook tape rotate-1">
            <p className="script text-4xl text-[var(--color-wine)]">бонус первым пятерым</p>
            <p className="mt-2 leading-8 text-[var(--color-ink)]/75">Первые 5 учеников январского сезона получают бесплатный индивидуальный разбор на 60 минут.</p>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-[var(--color-ink)]/55">
          Дополнительно к группе: индивидуальный разбор 60 минут — 50 BYN (≈ 1 400 ₽). Цены в рублях РФ ориентировочные, по текущему курсу.
        </p>
      </div>
    </section>
  );
}
