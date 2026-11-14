import { openLeadForm } from '../lead-form';
import { Polaroid } from './ui';

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[var(--color-wine-deep)] py-24 text-[var(--color-paper)] sm:py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(46,5,11,0.74), rgba(46,5,11,0.84)), url("/mood/leopards.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="text-center lg:text-left">
          <p className="kicker text-[var(--color-gold)]">знаешь больше · говоришь свободнее</p>
          <h2 className="caps mt-5 text-6xl sm:text-8xl">твой знак</h2>
          <p className="script -mt-2 text-6xl text-[var(--color-blush)] sm:text-8xl">начать</p>
          <p className="mx-auto mt-8 max-w-lg text-lg text-white/80 lg:mx-0">
            Бесплатный пробный урок: определим уровень, попробуем задание по теме и подберём группу.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => openLeadForm('Пробный урок')}
              className="whitespace-nowrap rounded-full bg-[var(--color-blush)] px-8 py-4 font-semibold text-[var(--color-wine)] hover:bg-white"
            >
              хочу на бесплатный урок →
            </button>
            <a href="https://t.me/tsvirkouliana" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap rounded-full border border-white/40 px-8 py-4 font-semibold hover:bg-white/10">
              задать вопрос в telegram
            </a>
          </div>
          <p className="mt-5 text-sm text-white/55">бесплатно и ни к чему не обязывает</p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <Polaroid src="/mood/icons-trio.jpg" alt="Три иконы стиля" caption="решайся." rotate={5} bw imgClassName="aspect-[4/3]" />
          <span className="bubble bubble-blue absolute -left-6 -bottom-6 -rotate-3">ok ok, i'm in 🫡</span>
        </div>
      </div>
    </section>
  );
}
