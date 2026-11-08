import { Users, User, Check, ShieldCheck, Gift } from 'lucide-react';
import { openLeadForm } from '../lead-form';

const plans = [
  {
    title: 'Групповой формат',
    desc: 'Основной формат ToBe: живые обсуждения, кейсы и проекты в мини-группе.',
    price: '250 BYN',
    rub: '≈ 6 900 ₽',
    lessons: '8 занятий в месяц',
    features: [
      '2 занятия в неделю по 90 минут',
      'Группа до 5 человек',
      'Сезон 3 месяца с финальным проектом',
      'Бесплатный клуб ToBe Talks',
    ],
    icon: Users,
    highlight: true,
  },
  {
    title: 'Индивидуальный формат',
    desc: 'Если неудобно в группе или нужна своя траектория.',
    price: '380 BYN',
    rub: '≈ 10 500 ₽',
    lessons: '8 занятий в месяц',
    features: [
      '2 занятия в неделю по 60 минут',
      'Темы под твои интересы и цели',
      'Гибкий график',
      'Бесплатный клуб ToBe Talks',
    ],
    icon: User,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Форматы и стоимость</h2>
          <p className="mt-3 text-lg text-gray-600">Начни с бесплатного пробного урока — подберём формат и группу по уровню.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`flex flex-col rounded-3xl p-6 sm:p-8 ${plan.highlight ? 'bg-gray-900 text-white shadow-2xl' : 'border border-gray-200 bg-white text-gray-900 shadow-lg'}`}
            >
              <div className="flex items-center justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${plan.highlight ? 'bg-white/10' : 'bg-gray-100'}`}>
                  <plan.icon className="h-6 w-6" />
                </div>
                {plan.highlight && (
                  <span className="rounded-full bg-[var(--color-cherry)] px-4 py-1 text-xs font-bold uppercase tracking-wide">Основной</span>
                )}
              </div>

              <h3 className="mt-6 text-2xl font-bold">{plan.title}</h3>
              <p className={`mt-2 text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>{plan.desc}</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-x-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>/ месяц · {plan.rub}</span>
              </div>
              <p className={`mt-1 text-sm font-semibold ${plan.highlight ? 'text-[var(--color-cherry-light)]' : 'text-[var(--color-cherry)]'}`}>{plan.lessons}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`mt-0.5 h-5 w-5 shrink-0 ${plan.highlight ? 'text-[var(--color-cherry-light)]' : 'text-green-600'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => openLeadForm(plan.title)}
                className={`mt-8 min-h-[52px] w-full rounded-xl py-4 text-sm font-bold ${plan.highlight ? 'bg-[var(--color-cherry)] text-white hover:bg-[var(--color-cherry-dark)]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                Записаться на пробный урок
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
            <ShieldCheck className="h-6 w-6 shrink-0 text-green-600" />
            <div>
              <p className="font-bold">Гарантия первого месяца</p>
              <p className="mt-1 text-sm text-gray-600">Если после первого занятия в группе поймёшь, что формат не твой, вернём деньги за оставшиеся занятия месяца.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5">
            <Gift className="h-6 w-6 shrink-0 text-[var(--color-cherry)]" />
            <div>
              <p className="font-bold">Бонус первым пятерым</p>
              <p className="mt-1 text-sm text-gray-600">Первые 5 учеников январского сезона получают бесплатный индивидуальный разбор на 60 минут.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Дополнительно к группе: индивидуальный разбор 60 минут — 50 BYN (≈ 1 400 ₽). Цены в рублях РФ ориентировочные, по текущему курсу.
        </p>
      </div>
    </section>
  );
}
