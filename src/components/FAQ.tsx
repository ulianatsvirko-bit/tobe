import { useState } from 'react';
import { Title, section } from './ui';

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
    <section id="faq" className="border-t border-[var(--color-ink)]/10 bg-[var(--color-cream)] py-24 sm:py-32">
      <div className={`${section} grid gap-12 lg:grid-cols-[1fr_1.6fr]`}>
        <div>
          <Title n="08" label="FAQ" accent="вопросы">Частые</Title>
          <p className="mt-6 text-[var(--color-ink)]/60">Не нашёл(ла) ответ? Напиши в Telegram — отвечу лично.</p>
        </div>

        <div className="border-t border-[var(--color-ink)]/15">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border-b border-[var(--color-ink)]/15">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-serif text-xl font-medium sm:text-2xl">{faq.q}</span>
                <span className="text-2xl text-[var(--color-wine)]">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && <p className="max-w-2xl pb-7 leading-relaxed text-[var(--color-ink)]/70">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
