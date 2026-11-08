import { useState } from 'react';
import { Title } from './ui';

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
    <section id="faq" className="relative bg-[var(--color-blush)] pb-20 text-[var(--color-ink)] sm:pb-28" style={{ ['--scallop' as string]: 'var(--color-blush)' }}>
      <div className="scallop" />
      <div className="mx-auto max-w-3xl px-4 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <img src="/mood/lace-bow.jpg" alt="" aria-hidden="true" className="mx-auto mb-6 w-28 mix-blend-multiply" />
        <Title kicker="nº 08 · faq" caps="вопрос" script="ответ" />
        <p className="mt-4 text-center text-sm text-[var(--color-ink)]/55">Не нашёл(ла) ответ? Напиши в Telegram — отвечу лично.</p>

        <div className="mt-12 border-t border-[var(--color-wine)]/20">
          {faqs.map((faq, idx) => (
            <div key={faq.q} className="border-b border-[var(--color-wine)]/20">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                className="flex w-full items-center gap-5 py-6 text-left"
              >
                <span className="kicker shrink-0 text-[var(--color-wine)]">( 0{idx + 1} )</span>
                <span className="flex-1 text-lg font-medium sm:text-xl">{faq.q}</span>
                <span className="text-2xl text-[var(--color-wine)]">{openIndex === idx ? '↑' : '↓'}</span>
              </button>
              {openIndex === idx && <p className="pb-7 pl-[4.6rem] leading-relaxed text-[var(--color-ink)]/75">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
