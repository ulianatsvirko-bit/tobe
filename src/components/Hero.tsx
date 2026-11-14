import { openLeadForm } from '../lead-form';
import { Photo, btnPrimaryOnDark, btnGhostOnDark, section } from './ui';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-wine-deep)] text-[var(--color-paper)]"
      style={{
        backgroundImage: 'linear-gradient(100deg, rgba(46,5,11,0.9) 0%, rgba(46,5,11,0.72) 55%, rgba(46,5,11,0.55) 100%), url("/mood/velvet-floral.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`${section} grid gap-14 pt-32 pb-20 lg:min-h-[88dvh] lg:grid-cols-[1.25fr_1fr] lg:items-center lg:pt-36`}>
        <div>
          <p className="kicker text-[var(--color-blush)]/70">English club · онлайн · мини-группы</p>

          <h1 className="relative mt-8">
            <span className="display block text-[28vw] text-[var(--color-blush)] sm:text-[10rem] lg:text-[11.5rem]">tobe.</span>
            <span className="script mt-[-0.35em] block pl-[8%] text-[12vw] text-white sm:text-7xl lg:text-[5.2rem]">the main character</span>
          </h1>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-white/80">
            Разбираешься в моде, психологии и бизнесе — и параллельно прокачиваешь английский. Мини-группы до 5 человек, онлайн.
          </p>
          <p className="mt-3 font-serif text-2xl italic text-[var(--color-blush)]">Знаешь больше. Говоришь свободнее.</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => openLeadForm('Пробный урок')} className={btnPrimaryOnDark}>
              Бесплатный пробный урок
            </button>
            <a href="#club" className={btnGhostOnDark}>Клуб ToBe Talks</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[22rem]">
          <Photo src="/method-photo.jpg" alt="Ульяна, основатель ToBe." caption="Ульяна, основатель ToBe." tilt={2} ratio="aspect-[3/4]" />
          <span className="bubble absolute -left-8 bottom-24 hidden sm:inline-block">heyyy, are you coming to class? ☕</span>
        </div>
      </div>
    </section>
  );
}
