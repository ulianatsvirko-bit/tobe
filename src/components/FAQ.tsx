import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Какой уровень английского нужен?',
    a: 'От A2 — когда ты понимаешь простые фразы и можешь немного рассказать о себе. На пробном уроке вместе определим уровень и подберём группу. Если уровень пока ниже, предложу индивидуальный формат.',
  },
  {
    q: 'Будет ли грамматика?',
    a: 'Да. Но не отдельными упражнениями «ради правил», а там, где она нужна для разговора: разбираем конструкции, которые встречаются в теме, и сразу используем их в речи.',
  },
  {
    q: 'Что такое сезон?',
    a: 'Сезон длится 3 месяца: месяц моды, месяц психологии и месяц бизнеса. В конце ты готовишь и презентуешь на английском свой проект. Оплата помесячная.',
  },
  {
    q: 'Как работает гарантия?',
    a: 'Если после первого занятия в группе поймёшь, что формат не твой, — напиши мне, и я верну деньги за оставшиеся занятия месяца. Без лишних вопросов.',
  },
  {
    q: 'Можно ли заниматься из России?',
    a: 'Да, все занятия проходят онлайн в Zoom. Оплату принимаю из Беларуси и России — способ обсудим после пробного урока.',
  },
  {
    q: 'Что если я пропущу занятие?',
    a: 'Пришлю материалы и задание, чтобы ты не отстал(а) от группы. Групповые занятия не переносятся, индивидуальные можно перенести, если предупредить заранее.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="paper py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <img src="/mood/lace-bow.jpg" alt="" aria-hidden="true" className="mx-auto mb-4 w-28 mix-blend-multiply" />
          <p className="kicker text-[var(--color-cherry)]">Nº 08 · FAQ</p>
          <h2 className="mt-2 text-4xl italic tracking-tight sm:text-6xl">Частые вопросы</h2>
          <p className="mt-3 text-sm text-gray-500">Не нашёл(ла) ответ? Напиши в Telegram — отвечу лично.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="overflow-hidden rounded-sm border border-[var(--color-ink)]/10 bg-[var(--color-ivory)]">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="flex w-full items-center justify-between px-5 py-4 text-left hover:bg-gray-50 sm:p-6"
              >
                <span className="pr-3 text-base font-semibold text-gray-900 sm:text-lg">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 shrink-0 text-[var(--color-cherry)]" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-gray-400" />
                )}
              </button>
              {openIndex === idx && (
                <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:text-base">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
