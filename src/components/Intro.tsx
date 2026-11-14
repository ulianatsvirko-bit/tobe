import { useEffect, useState } from 'react';

const SEEN_KEY = 'tobe:intro-seen';
const DURATION_MS = 3300;

function shouldPlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    if (window.sessionStorage.getItem(SEEN_KEY)) return false;
  } catch {
    /* storage can be blocked; just play */
  }
  return true;
}

/**
 * Opening curtain: "tobe." rises letter by letter, "the main character"
 * is written over it, then the curtain lifts to reveal the hero.
 * Always removes itself on a timer, so content can never stay hidden.
 */
export default function Intro() {
  const [visible, setVisible] = useState(shouldPlay);

  useEffect(() => {
    if (!visible) return;
    try {
      window.sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* ignore */
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = () => setVisible(false);
    const timer = window.setTimeout(close, DURATION_MS);
    window.addEventListener('keydown', close);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('keydown', close);
      document.body.style.overflow = previousOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-overlay velvet fixed inset-0 z-[200] grid cursor-pointer place-items-center" onClick={() => setVisible(false)} aria-hidden="true">
      <div className="px-6 text-center">
        <p className="intro-fade kicker text-[var(--color-blush)]/70">issue nº 01 · english club</p>
        <div className="mt-6">
          <p className="display flex justify-center overflow-hidden pb-[0.06em] text-[30vw] text-[var(--color-blush)] sm:text-[13rem]">
            {'tobe.'.split('').map((ch, i) => (
              <span key={i} className="intro-letter" style={{ ['--i' as string]: i }}>
                {ch}
              </span>
            ))}
          </p>
          <p className="intro-script script relative z-10 mt-[-0.55em] whitespace-nowrap pl-[6%] text-[12vw] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-8xl">
            the main character
          </p>
        </div>
      </div>
    </div>
  );
}
