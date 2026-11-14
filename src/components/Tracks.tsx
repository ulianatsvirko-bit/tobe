import { Title, section } from './ui';

const tracks = [
  {
    title: 'Fashion & Style',
    img: '/mood/vogue-flatlay.jpg',
    desc: 'Мода как индустрия, культура и бизнес.',
    topics: ['Почему Zara обновляет коллекции каждые 2 недели', 'Цвет и настроение', 'Slow vs fast fashion'],
  },
  {
    title: 'Psychology',
    img: '/mood/whisper.jpg',
    desc: 'Как мы думаем, чувствуем и принимаем решения.',
    topics: ['Почему мы покупаем то, что не носим', 'Привычки и прокрастинация', 'Первое впечатление'],
  },
  {
    title: 'Business',
    img: '/mood/newspapers.jpg',
    desc: 'Бренды, стартапы и карьера — на языке бизнеса.',
    topics: ['Бренд, который хочется купить', 'Питч идеи за 2 минуты', 'Собеседование и личный бренд'],
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="paper border-t border-[var(--color-ink)]/10 py-24 sm:py-32">
      <div className={section}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Title n="03" label="Три направления" accent="мы говорим">О чём</Title>
          <p className="max-w-sm text-lg leading-relaxed text-[var(--color-ink)]/70">
            В первом сезоне — по месяцу на каждое направление. Попробуешь всё и поймёшь, что твоё.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {tracks.map((track, idx) => (
            <article key={track.title}>
              <img src={track.img} alt="" aria-hidden="true" className="bw aspect-[4/5] w-full object-cover" />
              <p className="kicker mt-6 text-[var(--color-wine)]">Месяц 0{idx + 1}</p>
              <h3 className="mt-2 font-serif text-3xl font-medium italic">{track.title}</h3>
              <p className="mt-2 text-[var(--color-ink)]/70">{track.desc}</p>
              <ul className="mt-5 divide-y divide-[var(--color-ink)]/10 border-y border-[var(--color-ink)]/10 text-[15px]">
                {track.topics.map((topic) => (
                  <li key={topic} className="py-2.5">{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
