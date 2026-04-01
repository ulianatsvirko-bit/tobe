import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "А если у меня плохой английский?",
      a: "Мы поможем. Благодаря нашим методикам вы поймёте всё с первого занятия, независимо от уровня. Метод CLIL специально создан для того, чтобы поддерживать студентов на любом этапе."
    },
    {
      q: "Будет ли грамматика?",
      a: "Конечно. Но мы не будем её зубрить — вы научитесь использовать её правильно в живом общении. Грамматика станет естественной частью вашей речи."
    },
    {
      q: "Сколько длится курс?",
      a: "Курс адаптируется под ваши цели и темп. Мы рекомендуем заниматься не менее 3 месяцев для заметного результата."
    },
    {
      q: "Как проходят занятия?",
      a: "Все занятия проходят онлайн в формате живых уроков. Вы работаете над реальными проектами и задачами, а не просто слушаете лекции."
    }
  ];

  return (
    <section id="faq" className="py-14 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16 text-center">
          <span className="text-[var(--color-cherry)] font-semibold tracking-wide uppercase text-sm flex items-center justify-center gap-2">
            <span className="h-px w-4 bg-[var(--color-cherry)]"></span>
            FAQ
            <span className="h-px w-4 bg-[var(--color-cherry)]"></span>
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl mb-4">Частые вопросы</h2>
          <p className="text-xs text-gray-400 italic">Если вы не нашли ответ, напишите нам в Telegram</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-5 py-4 sm:p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="text-base sm:text-lg font-semibold text-gray-900 pr-3">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 text-[var(--color-cherry)]" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-gray-600 leading-relaxed text-sm sm:text-base border-t border-gray-100 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
