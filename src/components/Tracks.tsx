import { Shirt, Brain, Briefcase } from 'lucide-react';

const tracks = [
  {
    title: 'Fashion & Style',
    icon: Shirt,
    desc: 'Мода как индустрия, культура и бизнес.',
    topics: ['Почему Zara обновляет коллекции каждые 2 недели', 'Цвет и настроение: как стиль влияет на восприятие', 'Slow fashion vs fast fashion: спорим по-английски'],
  },
  {
    title: 'Psychology',
    icon: Brain,
    desc: 'Как мы думаем, чувствуем и принимаем решения.',
    topics: ['Почему мы покупаем то, что не носим', 'Привычки и прокрастинация', 'Первое впечатление и язык тела'],
  },
  {
    title: 'Business',
    icon: Briefcase,
    desc: 'Бренды, стартапы и карьера — на языке, на котором говорит бизнес.',
    topics: ['Как устроен бренд, который хочется купить', 'Питч своей идеи за 2 минуты', 'Собеседование и личный бренд'],
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-cherry)]">Три направления</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">О чём мы говорим</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            В первом сезоне — по месяцу на каждое направление. Попробуешь всё и поймёшь, что откликается больше.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tracks.map((track) => (
            <div key={track.title} className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                <track.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">{track.title}</h3>
              <p className="mt-2 text-gray-600">{track.desc}</p>
              <ul className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                {track.topics.map((topic) => (
                  <li key={topic} className="flex gap-3 text-sm text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-cherry)]" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
