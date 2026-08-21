import { motion } from 'motion/react';
import { Users, User, Zap, Check } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function Pricing() {
  const plans = [
    {
      title: "Групповой формат",
      desc: "Для тех, кто ценит общение и командные проекты.",
      price: "250 BYN",
      period: "/ месяц",
      lessons: "8 занятий в месяц",
      features: [
        "2 занятия в неделю по 90 минут",
        "Малые группы до 5 человек",
        "Максимум внимания каждому",
        "Работа над проектами"
      ],
      icon: Users,
      highlight: false
    },
    {
      title: "Гибридный формат",
      desc: "Максимальный результат: практика в группе + личный разбор.",
      price: "450 BYN",
      period: "/ месяц",
      lessons: "12 занятий в месяц (8 групповых + 4 индива)",
      features: [
        "2 групповых занятия (90 мин)",
        "1 индивидуальное (60 мин)",
        "3 занятия в неделю",
        "Идеально для быстрого прогресса"
      ],
      icon: Zap,
      highlight: true,
      tag: "Рекомендуем"
    },
    {
      title: "Индивидуальный формат",
      desc: "Персональная траектория по вашим интересам.",
      price: "380 BYN",
      period: "/ месяц",
      lessons: "8 занятий в месяц",
      features: [
        "2 занятия в неделю по 60 минут",
        "Полная адаптация материала",
        "Гибкий график",
        "Фокус на ваших целях"
      ],
      icon: User,
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-14 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-3 sm:mb-4">Форматы и стоимость</h2>
          <p className="text-base sm:text-xl text-gray-600">Выберите свой ритм погружения</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-6 sm:p-8 overflow-hidden ${
                plan.highlight 
                  ? 'text-white shadow-2xl ring-4 ring-[var(--color-cherry)]/20 lg:scale-[1.03] z-10' 
                  : 'bg-white text-gray-900 border border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src="https://i.ibb.co/Tq23tS8Y/To-Be.jpg" 
                    alt="Background" 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              
              <div className="relative z-10">
                {plan.highlight && (
                  <div className="mb-4 lg:mb-0 lg:absolute lg:-top-4 lg:left-1/2 lg:-translate-x-1/2 inline-flex rounded-full bg-[var(--color-cherry)] px-4 py-1 text-xs sm:text-sm font-bold text-white uppercase tracking-wide shadow-lg">
                    {plan.tag}
                  </div>
                )}

              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
                plan.highlight ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-900'
              }`}>
                <plan.icon className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-gray-100' : 'text-gray-500'}`}>{plan.period}</span>
              </div>
              <div className={`text-sm font-semibold mb-8 ${plan.highlight ? 'text-amber-200' : 'text-[var(--color-cherry)]'}`}>
                {plan.lessons}
              </div>

              <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 md:gap-3">
                    <Check className={`h-4 w-4 md:h-5 md:w-5 shrink-0 ${plan.highlight ? 'text-white' : 'text-green-600'}`} />
                    <span className={`text-xs md:text-sm ${plan.highlight ? 'text-gray-100' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openLeadForm(plan.title)}
                className={`w-full rounded-xl py-4 min-h-[52px] text-sm font-bold transition-all ${
                  plan.highlight 
                    ? 'bg-[var(--color-cherry)] text-white hover:bg-[var(--color-cherry-light)]' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Выбрать формат
              </motion.button>
              <p className={`mt-4 text-center text-[10px] italic opacity-50 ${plan.highlight ? 'text-white' : 'text-gray-500'}`}>
                * оплата производится в бел. рублях по курсу НБРБ
              </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
