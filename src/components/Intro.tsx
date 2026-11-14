import { useEffect, useRef, useState } from 'react';
import { INTRO_EVENT, INTRO_KEY, PLAY_INTRO } from '../intro-state';

const MORPH_AT_MS = 2000;
const MORPH_MS = 950;
const DONE_MS = MORPH_AT_MS + MORPH_MS + 50;
const EASE = 'cubic-bezier(.65,0,.25,1)';

/**
 * Opening card: "tobe." rises letter by letter and "the main character" is written in.
 * Then the tagline fades, the card dissolves into the identical cream hero, and the
 * big wordmark glides and shrinks onto the hero wordmark, so intro and hero read as
 * one continuous motion. Click or any key skips. Always ends on a timer.
 */
export default function Intro() {
  const [visible, setVisible] = useState(PLAY_INTRO);
  const bgRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLSpanElement>(null);
  const extrasRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    try {
      window.sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* ignore */
    }

    let finished = false;
    const close = () => {
      if (finished) return;
      finished = true;
      window.dispatchEvent(new Event(INTRO_EVENT));
      setVisible(false);
    };

    const morph = () => {
      const mark = markRef.current;
      const target = document.getElementById('hero-mark');
      for (const el of [extrasRef.current, taglineRef.current]) {
        el?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: 'ease-out', fill: 'forwards' });
      }
      bgRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, delay: 150, easing: 'ease-out', fill: 'forwards' });
      if (mark && target) {
        const from = mark.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const dx = to.left + to.width / 2 - (from.left + from.width / 2);
        const dy = to.top + to.height / 2 - (from.top + from.height / 2);
        const s = from.width ? to.width / from.width : 1;
        mark.animate(
          [{ transform: 'translate(0, 0) scale(1)' }, { transform: `translate(${dx}px, ${dy}px) scale(${s})` }],
          { duration: MORPH_MS, easing: EASE, fill: 'forwards' },
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);
    const t1 = window.setTimeout(morph, MORPH_AT_MS);
    const t2 = window.setTimeout(close, DONE_MS);
    window.addEventListener('keydown', close);
    window.addEventListener('pointerdown', close);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('keydown', close);
      window.removeEventListener('pointerdown', close);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] grid cursor-pointer place-items-center" aria-hidden="true">
      <div ref={bgRef} className="paper absolute inset-0" />
      <div className="relative px-6 text-center">
        <div ref={extrasRef}>
          <p className="intro-fade kicker text-[var(--color-wine)]">english club · online</p>
        </div>
        <p className="display mt-6 text-[30vw] text-[var(--color-wine)] sm:text-[13rem]">
          <span ref={markRef} className="inline-block origin-center will-change-transform">
            {'tobe.'.split('').map((ch, i) => (
              <span key={i} className="intro-letter" style={{ ['--i' as string]: i }}>
                {ch}
              </span>
            ))}
          </span>
        </p>
        <div ref={taglineRef}>
          <p className="intro-script script relative z-10 mt-[-0.5em] whitespace-nowrap pl-[6%] text-[12vw] text-[var(--color-ink)] sm:text-8xl">
            the main character
          </p>
        </div>
      </div>
    </div>
  );
}
