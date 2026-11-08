import { Link } from 'react-router-dom';
import { Title, Polaroid } from './ui';

const features = [
  {
    n: '01',
    title: 'сначала тема',
    desc: 'Каждое занятие — про что-то настоящее: почему бренды выбирают определённые цвета, как работают привычки, как устроен стартап.',
  },
  {
    n: '02',
    title: 'английский — по ходу дела',
    desc: 'Ты обсуждаешь, споришь, решаешь кейсы. Слова и грамматика запоминаются, потому что нужны прямо сейчас.',
  },
  {
    n: '03',
    title: 'опоры на каждом шаге',
    desc: 'Схемы, картинки и шаблоны фраз помогают говорить, даже если уровень пока не идеальный.',
  },
];

export default function Method() {
  return (
    <section id="method" className="velvet relative overflow-hidden py-20 text-[var(--color-paper)] sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Title kicker="nº 02 · метод clil" caps="не учим язык." script="учимся на нём" align="left" tone="light" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
              CLIL — подход, при котором язык изучают через предмет. Ты одновременно узнаёшь новое и начинаешь свободнее говорить.
            </p>

            <div className="mt-10 grid gap-5">
              {features.map((f, i) => (
                <div key={f.n} className="notebook text-[var(--color-ink)]" style={{ rotate: `${i % 2 ? 0.8 : -0.8}deg`, ['--hole' as string]: '#4A0E17' }}>
                  <div className="flex items-baseline gap-4">
                    <span className="display text-4xl text-[var(--color-wine)]">{f.n}</span>
                    <h3 className="script text-4xl text-[var(--color-wine)]">{f.title}</h3>
                  </div>
                  <p className="mt-2 leading-8 text-[var(--color-ink)]/75">{f.desc}</p>
                </div>
              ))}
            </div>

            <Link to="/method" className="mt-10 inline-flex rounded-full border border-white/40 px-7 py-3.5 font-semibold hover:bg-white/10">
              подробнее про метод →
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <Polaroid
              src="/lesson-photo.jpg"
              alt="Урок ToBe: тема Relationships на экране ноутбука"
              caption="real lesson: relationships"
              rotate={3}
              imgClassName="aspect-[4/5]"
            />
            <span className="bubble absolute -left-4 top-1/3 -rotate-3">wait… this is english class?? 😳</span>
          </div>
        </div>
      </div>
    </section>
  );
}
