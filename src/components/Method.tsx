import { Link } from 'react-router-dom';
import { Title, card, section, btnGhost } from './ui';

const features = [
  {
    title: 'Сначала тема',
    desc: 'Каждое занятие — про что-то настоящее: почему бренды выбирают определённые цвета, как работают привычки, как устроен стартап.',
  },
  {
    title: 'Английский — по ходу дела',
    desc: 'Ты обсуждаешь, споришь, решаешь кейсы. Слова и грамматика запоминаются, потому что нужны прямо сейчас.',
  },
  {
    title: 'Опоры на каждом шаге',
    desc: 'Схемы, картинки и шаблоны фраз помогают говорить, даже если уровень пока не идеальный.',
  },
];

export default function Method() {
  return (
    <section id="method" className="border-t border-[var(--color-ink)]/10 bg-[var(--color-cream)] py-24 sm:py-32">
      <div className={`${section} grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start`}>
        <div>
          <Title n="02" label="Метод CLIL" accent="Учимся на нём.">Не учим язык.</Title>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[var(--color-ink)]/70">
            CLIL — подход, при котором язык изучают через предмет. Ты одновременно узнаёшь новое и начинаешь свободнее говорить.
          </p>
          <img src="/lesson-photo.jpg" alt="Урок ToBe: тема Relationships на экране ноутбука" className="mt-10 aspect-[4/3] w-full max-w-md object-cover" />
          <p className="mt-3 font-serif text-base italic text-[var(--color-ink)]/60">Настоящий урок: Relationships</p>
        </div>

        <div className="grid gap-4 lg:pt-24">
          {features.map((f, i) => (
            <div key={f.title} className={`${card} p-7`}>
              <p className="font-serif text-lg italic text-[var(--color-wine)]">0{i + 1}</p>
              <h3 className="mt-1 font-serif text-2xl font-medium">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-[var(--color-ink)]/70">{f.desc}</p>
            </div>
          ))}
          <Link to="/method" className={`${btnGhost} mt-4 w-fit`}>Подробнее про метод</Link>
        </div>
      </div>
    </section>
  );
}
