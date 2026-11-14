import { useEffect, useState } from 'react';
import { openLeadForm } from '../lead-form';
import { INTRO_EVENT, PLAY_INTRO } from '../intro-state';

const flags = [
  { side: 'left', alt: false, x: '22%', y: '24%', word: 'fashion' },
  { side: 'right', alt: true, x: '40%', y: '23%', word: 'psychology' },
  { side: 'left', alt: true, x: '33%', y: '57%', word: 'art' },
  { side: 'right', alt: false, x: '86%', y: '53%', word: 'business' },
];

export default function Hero() {
  const [phase, setPhase] = useState<'idle' | 'wait' | 'play'>(PLAY_INTRO ? 'wait' : 'idle');

  useEffect(() => {
    if (phase !== 'wait') return;
    const start = () => setPhase('play');
    const fallback = window.setTimeout(start, 4000);
    window.addEventListener(INTRO_EVENT, start);
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener(INTRO_EVENT, start);
    };
  }, [phase]);

  const d = (s: number) => ({ ['--d' as string]: `${s}s` });
  const phaseClass = phase === 'wait' ? 'hero-wait' : phase === 'play' ? 'hero-play' : '';

  return (
    <section className={`${phaseClass} paper relative overflow-hidden px-5 pt-28 pb-20 text-center sm:px-8`}>
      <div className="mx-auto max-w-5xl">
        <p className="enter kicker text-[var(--color-wine)]" style={d(0)}>Онлайн-школа английского языка</p>

        <h1 className="mt-4">
          <span className="display block text-[26vw] text-[var(--color-wine)] sm:text-[10rem] lg:text-[11rem]">
            <span id="hero-mark" className="hero-mark inline-block">tobe.</span>
          </span>
          <span className="enter mx-auto mt-6 block max-w-[18ch] font-serif text-[2.3rem] leading-[1.02] font-medium text-[var(--color-ink)] sm:text-5xl" style={{ textWrap: 'balance', ...d(0.05) }}>
            Учи английский через то, <em className="text-[var(--color-wine)]">что тебе интересно</em>
          </span>
        </h1>

        <div className="still">
          <img src="/hero-still.jpg" alt="Туфли, модный журнал, книга по психологии, ежедневник с фотополоской, кофе и очки" />
          {flags.map((f, i) => (
            <div key={f.word} className={`flag ${f.side} ${f.alt ? 'alt' : ''}`} style={{ ['--x' as string]: f.x, ['--y' as string]: f.y, ['--f' as string]: i }} aria-hidden="true">
              <span className="rule" />
              <span className="dot" />
              <span className="pennant"><em>{f.word}</em></span>
            </div>
          ))}
        </div>

        <div style={d(1.3)} className="enter mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => openLeadForm('Пробный урок')} className="rounded-full bg-[var(--color-wine)] px-7 py-3.5 font-medium text-[var(--color-paper)] hover:bg-[var(--color-wine-deep)]">
            Бесплатный пробный урок
          </button>
          <a href="#club" className="rounded-full border border-[var(--color-ink)]/25 px-7 py-3.5 font-medium hover:bg-white">
            Клуб ToBe Talks
          </a>
        </div>

        <dl style={d(1.4)} className="enter mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-9 border-t border-[var(--color-ink)]/12 pt-6 text-sm text-[var(--color-ink)]/60">
          {[['5 лет', 'преподаю'], ['до 5', 'человек в группе'], ['январь', 'старт сезона']].map(([v, l]) => (
            <div key={l}>
              <dt className="font-serif text-2xl font-medium text-[var(--color-ink)]">{v}</dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
