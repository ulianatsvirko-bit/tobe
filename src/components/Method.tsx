import { BookOpen, LifeBuoy, MessagesSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Сначала тема',
    desc: 'Каждое занятие — про что-то настоящее: почему бренды выбирают определённые цвета, как работают привычки, как устроен стартап.',
    icon: BookOpen,
  },
  {
    title: 'Английский — по ходу дела',
    desc: 'Ты обсуждаешь, споришь, решаешь кейсы. Слова и грамматика запоминаются, потому что нужны прямо сейчас.',
    icon: MessagesSquare,
  },
  {
    title: 'Опоры на каждом шаге',
    desc: 'Схемы, картинки и шаблоны фраз помогают говорить, даже если уровень пока не идеальный.',
    icon: LifeBuoy,
  },
];

export default function Method() {
  return (
    <section id="method" className="velvet relative overflow-hidden py-16 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="kicker flex items-center gap-2 text-[var(--color-gold)]">
              <span className="h-px w-8 bg-[var(--color-gold)]/60"></span>
              Nº 02 · Метод CLIL
            </span>
            <h2 className="mt-3 text-5xl italic leading-tight tracking-tight text-white sm:text-7xl">
              Не учим язык. Учимся на нём.
            </h2>
            <p className="mt-6 mb-8 text-lg leading-relaxed text-white/90">
              CLIL — подход, при котором язык изучают через предмет. Так ты одновременно узнаёшь новое и начинаешь свободнее говорить.
            </p>

            <div className="grid gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4 rounded-sm border border-white/40 bg-[#FDFBF7]/95 p-4 shadow-xl sm:gap-6 sm:p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white text-[var(--color-cherry)] shadow-sm sm:h-12 sm:w-12">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-gray-900 sm:text-xl">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/method"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-none border border-white/40 bg-[#FDFBF7]/90 px-6 py-3.5 text-sm font-bold text-gray-900 shadow-xl hover:bg-white hover:text-[var(--color-cherry)] sm:w-auto"
            >
              Подробнее про метод
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="hidden lg:block">
            <img
              src="/lesson-photo.jpg"
              alt="Урок ToBe: тема Relationships на экране ноутбука"
              className="mx-auto h-auto w-4/5 border border-[var(--color-gold)]/50 p-3 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
