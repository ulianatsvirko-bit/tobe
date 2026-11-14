import { useEffect, useState } from 'react';
import { openLeadForm } from '../lead-form';

const SEEN_KEY = 'tobe:hero-played';

function shouldPlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return !window.sessionStorage.getItem(SEEN_KEY);
  } catch {
    return true;
  }
}

const flags = [
  { side: 'left', alt: false, x: '22%', y: '26%', word: 'моду' },
  { side: 'right', alt: true, x: '40%', y: '23%', word: 'психологию' },
  { side: 'right', alt: false, x: '86%', y: '52%', word: 'бизнес' },
  { side: 'left', alt: true, x: '36%', y: '78%', word: 'живой разговор' },
];

export default function Hero() {
  const [play] = useState(shouldPlay);
  useEffect(() => {
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
  }, []);
  const d = (s: number) => ({ ['--d' as string]: `${s}s` });

  return (
    <section className={`${play ? 'hero-play' : ''} paper relative overflow-hidden px-5 pt-28 pb-20 text-center sm:px-8`}>
      <div className="mx-auto max-w-5xl">
        <p className="enter kicker text-[var(--color-wine)]" style={d(0)}>Онлайн-школа английского языка</p>

        <h1 className="mt-4" aria-label="tobe. the main character">
          <span className="display block text-[28vw] text-[var(--color-wine)] sm:text-[11rem] lg:text-[12.5rem]">
            {'tobe.'.split('').map((ch, i) => (
              <span key={i} className="letter" style={{ ['--i' as string]: i }}>{ch}</span>
            ))}
          </span>
          <span className="write script -mt-[0.5em] block text-[12vw] text-[var(--color-ink)] sm:text-7xl">the main character</span>
        </h1>

        <div className="still">
          <img src="/hero-still.jpg" alt="Туфли, модный журнал, книга по психологии, ежедневник, тетрадь со словами, кофе и очки" />
          {flags.map((f, i) => (
            <div key={f.word} className={`flag ${f.side} ${f.alt ? 'alt' : ''}`} style={{ ['--x' as string]: f.x, ['--y' as string]: f.y, ['--f' as string]: i }} aria-hidden="true">
              <span className="rule" />
              <span className="dot" />
              <span className="pennant"><small>через</small><em>{f.word}</em></span>
            </div>
          ))}
        </div>

        <h2 className="enter mx-auto mt-10 max-w-[16ch] font-serif text-[2.6rem] leading-[1.02] font-medium sm:text-6xl" style={{ textWrap: 'balance', ...d(1.5) }}>
          Учи английский через то, <em className="text-[var(--color-wine)]">что тебе интересно</em>
        </h2>
        <p style={d(1.65)} className="enter mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink)]/65">
          Мода, психология и бизнес — на английском. Мини-группы до 5 человек, живые обсуждения вместо учебника.
        </p>

        <div style={d(1.8)} className="enter mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => openLeadForm('Пробный урок')} className="rounded-full bg-[var(--color-wine)] px-7 py-3.5 font-medium text-[var(--color-paper)] hover:bg-[var(--color-wine-deep)]">
            Бесплатный пробный урок
          </button>
          <a href="#club" className="rounded-full border border-[var(--color-ink)]/25 px-7 py-3.5 font-medium hover:bg-white">
            Клуб ToBe Talks
          </a>
        </div>

        <dl style={d(1.95)} className="enter mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-9 border-t border-[var(--color-ink)]/12 pt-6 text-sm text-[var(--color-ink)]/60">
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
