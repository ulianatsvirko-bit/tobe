import { openLeadForm } from '../lead-form';
import { Polaroid, Marquee } from './ui';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[var(--color-wine-deep)] text-[var(--color-paper)]"
      style={{
        backgroundImage: 'linear-gradient(100deg, rgba(46,5,11,0.86) 0%, rgba(46,5,11,0.6) 50%, rgba(46,5,11,0.4) 100%), url("/mood/velvet-floral.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pt-32 pb-20 sm:px-6 lg:min-h-[92dvh] lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
        <div className="relative z-10">
          <p className="kicker text-[var(--color-gold)]">issue nº 01 · winter 2027 · english club</p>

          <h1 className="relative mt-6">
            <span className="display block text-[30vw] text-[var(--color-blush)] sm:text-[11rem] lg:text-[13rem]">tobe.</span>
            <span className="script absolute left-[18%] top-[62%] block -rotate-6 text-[13vw] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-7xl lg:text-8xl">
              the main character
            </span>
          </h1>

          <p className="mt-16 max-w-lg text-lg leading-relaxed text-white/85 sm:mt-20 sm:text-xl">
            Разбираешься в моде, психологии и бизнесе — и параллельно прокачиваешь английский. Мини-группы до 5 человек, онлайн.
          </p>
          <p className="mt-4 font-serif text-2xl italic text-[var(--color-gold)]">Знаешь больше. Говоришь свободнее.</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openLeadForm('Пробный урок')}
              className="rounded-full bg-[var(--color-blush)] px-8 py-4 font-semibold text-[var(--color-wine)] shadow-lg shadow-black/30 hover:bg-white"
            >
              хочу на бесплатный урок →
            </button>
            <a href="#club" className="rounded-full border border-white/40 px-8 py-4 text-center font-semibold text-white hover:bg-white/10">
              клуб tobe talks
            </a>
          </div>
        </div>

        {/* collage */}
        <div className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]">
          <Polaroid
            src="/method-photo.jpg"
            alt="Ульяна, основатель ToBe."
            caption="ulyana, founder"
            rotate={4}
            bw
            imgClassName="aspect-[3/4]"
            className="absolute left-[22%] top-6 z-20 w-[58%]"
          />
          <Polaroid
            src="/mood/icons-trio.jpg"
            alt="Три иконы стиля"
            caption="main character energy"
            rotate={-9}
            imgClassName="aspect-[4/3]"
            className="absolute left-0 top-0 z-10 w-[52%]"
          />
          <Polaroid
            src="/mood/coffee.jpg"
            alt="Кофе со следом помады"
            caption="9:00 am"
            rotate={11}
            tape={false}
            imgClassName="aspect-square"
            className="absolute right-0 bottom-4 z-30 w-[38%]"
          />
          <span className="bubble absolute -left-2 bottom-24 z-40 -rotate-3 sm:bottom-32">heyyyy, are you coming to class? ☕</span>
          <span className="bubble bubble-blue absolute right-2 top-[42%] z-40 rotate-2">obviously 💋</span>
        </div>
      </div>

      <Marquee
        className="display bg-[var(--color-blush)] py-4 text-2xl text-[var(--color-wine)] sm:text-3xl"
        items={['fashion', 'psychology', 'business', 'english', 'tobe talks', 'main character energy', 'знаешь больше', 'говоришь свободнее']}
      />
    </section>
  );
}
