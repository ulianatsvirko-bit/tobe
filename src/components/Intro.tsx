import { useEffect, useState } from 'react';
import { INTRO_EVENT, INTRO_KEY, PLAY_INTRO } from '../intro-state';

const REVEAL_MS = 2350;
const DONE_MS = 3150;

/**
 * Opening card on cream paper: "tobe." rises letter by letter, "the main character"
 * is written in, then the card lifts and the hero flags start. Click or any key skips.
 * Always removes itself on a timer, so content can never stay hidden.
 */
export default function Intro() {
  const [visible, setVisible] = useState(PLAY_INTRO);

  useEffect(() => {
    if (!visible) return;
    try {
      window.sessionStorage.setItem(INTRO_KEY, '1');
    } catch {
      /* ignore */
    }
    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      window.dispatchEvent(new Event(INTRO_EVENT));
    };
    const close = () => {
      reveal();
      setVisible(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const t1 = window.setTimeout(reveal, REVEAL_MS);
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
    <div className="intro-overlay paper fixed inset-0 z-[200] grid cursor-pointer place-items-center" aria-hidden="true">
      <div className="px-6 text-center">
        <p className="intro-fade kicker text-[var(--color-wine)]">english club · online</p>
        <p className="display mt-6 flex justify-center text-[30vw] text-[var(--color-wine)] sm:text-[13rem]">
          {'tobe.'.split('').map((ch, i) => (
            <span key={i} className="intro-letter" style={{ ['--i' as string]: i }}>
              {ch}
            </span>
          ))}
        </p>
        <p className="intro-script script relative z-10 mt-[-0.5em] whitespace-nowrap pl-[6%] text-[12vw] text-[var(--color-ink)] sm:text-8xl">
          the main character
        </p>
      </div>
    </div>
  );
}
