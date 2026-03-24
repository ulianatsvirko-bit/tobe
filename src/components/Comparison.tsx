import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const items = [
    {
      title: "Обычные уроки",
      points: [
        "Выучить правила",
        "Вы учите теорию и правила",
        "Цель — сдать тест и забыть",
        "Язык как тяжелый предмет",
        "Скука и повторение",
        "Учите язык как иностранный"
      ],
      icon: X,
      color: "text-gray-400"
    },
    {
      title: "Школа ToBe.",
      points: [
        "Узнать новое про бизнес/психологию/искусство",
        "Вы сразу пользуетесь языком",
        "Цель — понять тему и создать проект",
        "Язык как удобный инструмент",
        "Рост и развитие каждый день",
        "Учите язык как родной"
      ],
      icon: Check,
      color: "text-[var(--color-cherry)]"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">В чем разница?</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((col, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-6 sm:p-12 ${idx === 1 ? 'bg-white shadow-xl ring-1 ring-gray-900/5' : 'bg-transparent border border-gray-200'}`}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className={`text-2xl font-bold ${idx === 1 ? 'text-[var(--color-cherry)]' : 'text-gray-900'}`}>
                  {col.title}
                </h3>
                <col.icon className={`h-8 w-8 ${col.color}`} />
              </div>

              <ul className="space-y-6">
                {col.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-1.5 h-2 w-2 rounded-full ${idx === 1 ? 'bg-[var(--color-cherry)]' : 'bg-gray-300'}`} />
                    <span className={`text-lg ${idx === 1 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
