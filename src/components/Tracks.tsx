import { Title } from './ui';

const tracks = [
  {
    title: 'fashion & style',
    img: '/mood/vogue-flatlay.jpg',
    desc: 'Мода как индустрия, культура и бизнес.',
    topics: ['почему Zara обновляет коллекции каждые 2 недели', 'цвет и настроение', 'slow vs fast fashion'],
    tone: 'bg-[var(--color-blush)]',
  },
  {
    title: 'psychology',
    img: '/mood/lace-profile.jpg',
    desc: 'Как мы думаем, чувствуем и принимаем решения.',
    topics: ['почему мы покупаем то, что не носим', 'привычки и прокрастинация', 'первое впечатление'],
    tone: 'bg-white',
  },
  {
    title: 'business',
    img: '/mood/nyc-skyline.jpg',
    desc: 'Бренды, стартапы и карьера — на языке бизнеса.',
    topics: ['бренд, который хочется купить', 'питч идеи за 2 минуты', 'собеседование и личный бренд'],
    tone: 'bg-[var(--color-blush)]',
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Title kicker="nº 03 · три направления" caps="о чём" script="мы говорим" />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-[var(--color-ink)]/70">
          В первом сезоне — по месяцу на каждое направление. Попробуешь всё и поймёшь, что твоё.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tracks.map((track, idx) => (
            <article key={track.title} className={`${track.tone} flex flex-col overflow-hidden rounded-t-[999px] rounded-b-[28px] text-[var(--color-ink)] shadow-[0_24px_50px_-28px_rgba(46,5,11,0.55)] ${idx === 1 ? 'md:-mt-6' : 'md:mt-6'}`}>
              <div className="aspect-[4/5] overflow-hidden bg-white">
                <img src={track.img} alt="" aria-hidden="true" className={`h-full w-full ${idx === 0 ? 'bw object-cover' : 'object-contain p-6'}`} />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="kicker text-[var(--color-wine)]">track 0{idx + 1}</p>
                <h3 className="script mt-2 text-5xl text-[var(--color-wine)]">{track.title}</h3>
                <p className="mt-3 text-[var(--color-ink)]/70">{track.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.topics.map((topic, i) => (
                    <span key={topic} className={`pill ${i % 2 ? 'border border-[var(--color-ink)]/25' : 'bg-[var(--color-ink)] text-[var(--color-paper)]'}`}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
