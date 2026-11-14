import { openLeadForm } from '../lead-form';
import { Title, card, section, btnPrimary, btnPrimaryOnDark } from './ui';

const plans = [
  {
    title: 'Групповой формат',
    price: '250 BYN',
    rub: '≈ 6 900 ₽',
    features: ['8 занятий в месяц, 2 × 90 минут в неделю', 'Группа до 5 человек', 'Сезон 3 месяца с финальным проектом', 'Бесплатный клуб ToBe Talks'],
    main: true,
  },
  {
    title: 'Индивидуальный формат',
    price: '380 BYN',
    rub: '≈ 10 500 ₽',
    features: ['8 занятий в месяц, 2 × 60 минут в неделю', 'Темы под твои интересы и цели', 'Гибкий график', 'Бесплатный клуб ToBe Talks'],
    main: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="paper py-24 sm:py-32">
      <div className={section}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Title n="07" label="Стоимость" accent="и цены">Форматы</Title>
          <p className="max-w-sm text-lg leading-relaxed text-[var(--color-ink)]/70">
            Начни с бесплатного пробного урока — подберём формат и группу по уровню.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.title} className={`flex flex-col p-8 sm:p-10 ${plan.main ? 'bg-[var(--color-wine)] text-[var(--color-paper)]' : card}`}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-3xl font-medium">{plan.title}</h3>
                {plan.main && <span className="kicker shrink-0 rounded-full border border-white/30 px-3 py-1.5 text-[var(--color-blush)]">Основной</span>}
              </div>
              <p className="mt-8 font-serif text-6xl font-medium">{plan.price}</p>
              <p className={`mt-1 text-sm ${plan.main ? 'text-white/65' : 'text-[var(--color-ink)]/55'}`}>в месяц · {plan.rub}</p>
              <ul className={`mt-8 flex-1 divide-y border-y text-[15px] ${plan.main ? 'divide-white/15 border-white/15' : 'divide-[var(--color-ink)]/10 border-[var(--color-ink)]/10'}`}>
                {plan.features.map((f) => (
                  <li key={f} className="py-3">{f}</li>
                ))}
              </ul>
              <button type="button" onClick={() => openLeadForm(plan.title)} className={`${plan.main ? btnPrimaryOnDark : btnPrimary} mt-8`}>
                Записаться на пробный урок
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className={`${card} p-7`}>
            <p className="font-serif text-2xl font-medium italic text-[var(--color-wine)]">Гарантия первого месяца</p>
            <p className="mt-2 leading-relaxed text-[var(--color-ink)]/70">Если после первого занятия в группе поймёшь, что формат не твой, вернём деньги за оставшиеся занятия месяца.</p>
          </div>
          <div className={`${card} p-7`}>
            <p className="font-serif text-2xl font-medium italic text-[var(--color-wine)]">Бонус первым пятерым</p>
            <p className="mt-2 leading-relaxed text-[var(--color-ink)]/70">Первые 5 учеников январского сезона получают бесплатный индивидуальный разбор на 60 минут.</p>
          </div>
        </div>

        <p className="mt-8 text-sm text-[var(--color-ink)]/55">
          Дополнительно к группе: индивидуальный разбор 60 минут — 50 BYN (≈ 1 400 ₽). Цены в рублях РФ ориентировочные, по текущему курсу.
        </p>
      </div>
    </section>
  );
}
