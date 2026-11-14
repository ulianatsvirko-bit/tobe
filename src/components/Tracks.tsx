import { Title } from './ui';

const tracks = [
  {
    title: 'fashion & style',
    img: '/mood/vogue-flatlay.jpg',
    desc: 'Мода как индустрия, культура и бизнес.',
    topics: ['почему Zara обновляет коллекции', 'цвет и настроение', 'slow vs fast fashion'],
    tone: 'bg-[var(--color-blush)]',
  },
  {
    title: 'psychology',
    img: '/mood/whisper.jpg',
    desc: 'Как мы думаем, чувствуем и принимаем решения.',
    topics: ['почему покупаем то, что не носим', 'привычки', 'первое впечатление'],
    tone: 'bg-white',
  },
  {
    title: 'business',
    img: '/mood/newspapers.jpg',
    desc: 'Бренды, стартапы и карьера — на языке бизнеса.',
    topics: ['бренд, который хочется купить', 'питч за 2 минуты', 'личный бренд'],
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

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {tracks.map((track, idx) => (
            <article
              key={track.title}
              className={`${track.tone} mx-auto flex w-full max-w-[17rem] flex-col overflow-hidden rounded-t-[999px] rounded-b-[22px] text-[var(--color-ink)] shadow-[0_20px_40px_-26px_rgba(46,5,11,0.55)] ${idx === 1 ? 'sm:-mt-4' : 'sm:mt-4'}`}
            >
              <div className="aspect-square overflow-hidden">
                <img src={track.img} alt="" aria-hidden="true" className="bw h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="kicker text-[var(--color-wine)]">track 0{idx + 1}</p>
                <h3 className="script mt-1 text-4xl text-[var(--color-wine)]">{track.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink)]/70">{track.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {track.topics.map((topic, i) => (
                    <span key={topic} className={`pill !px-3 !py-1.5 !text-[0.72rem] ${i % 2 ? 'border border-[var(--color-ink)]/25' : 'bg-[var(--color-ink)] text-[var(--color-paper)]'}`}>
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
