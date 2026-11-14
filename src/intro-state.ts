export const INTRO_EVENT = 'tobe:intro-done';
export const INTRO_KEY = 'tobe:intro-seen';

function computePlay() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return !window.sessionStorage.getItem(INTRO_KEY);
  } catch {
    return true;
  }
}

/** Decided once per page load: play the intro and the hero entrance after it. */
export const PLAY_INTRO = computePlay();
