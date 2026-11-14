import type { ReactNode } from 'react';

type TitleProps = {
  n: string;
  label: string;
  children: ReactNode;
  accent?: ReactNode;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
};

/**
 * One heading style for every section:
 * number + label, serif title with a single italic wine word.
 */
export function Title({ n, label, children, accent, tone = 'light', align = 'left' }: TitleProps) {
  const dark = tone === 'dark';
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className={`kicker ${dark ? 'text-[var(--color-blush)]/70' : 'text-[var(--color-wine)]'}`}>
        {n} — {label}
      </p>
      <h2 className={`mt-4 font-serif text-[2.6rem] leading-[1.02] font-medium tracking-[-0.01em] sm:text-6xl ${dark ? 'text-[var(--color-paper)]' : 'text-[var(--color-ink)]'}`} style={{ textWrap: 'balance' }}>
        {children}
        {accent && (
          <>
            {' '}
            <em className={dark ? 'text-[var(--color-blush)]' : 'text-[var(--color-wine)]'}>{accent}</em>
          </>
        )}
      </h2>
    </div>
  );
}

type PhotoProps = {
  src: string;
  alt: string;
  caption?: string;
  tilt?: number;
  ratio?: string;
  className?: string;
};

/** The single photo treatment: black-and-white print in a thin white frame. */
export function Photo({ src, alt, caption, tilt = 0, ratio = 'aspect-[4/5]', className = '' }: PhotoProps) {
  return (
    <figure className={`bg-white p-2.5 pb-3 shadow-[0_20px_45px_-25px_rgba(22,17,18,0.5)] ${className}`} style={tilt ? { rotate: `${tilt}deg` } : undefined}>
      <img src={src} alt={alt} className={`bw w-full object-cover ${ratio}`} />
      {caption && <figcaption className="mt-2.5 px-1 font-serif text-base italic text-[var(--color-ink)]/70">{caption}</figcaption>}
    </figure>
  );
}

export const btnPrimary = 'inline-flex items-center justify-center rounded-full bg-[var(--color-wine)] px-7 py-3.5 text-[15px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-wine-deep)]';
export const btnPrimaryOnDark = 'inline-flex items-center justify-center rounded-full bg-[var(--color-blush)] px-7 py-3.5 text-[15px] font-medium text-[var(--color-wine)] hover:bg-white';
export const btnGhostOnDark = 'inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-[15px] font-medium text-[var(--color-paper)] hover:bg-white/10';
export const btnGhost = 'inline-flex items-center justify-center rounded-full border border-[var(--color-ink)]/25 px-7 py-3.5 text-[15px] font-medium text-[var(--color-ink)] hover:bg-white';
export const card = 'border border-[var(--color-ink)]/10 bg-[var(--color-paper)]';
export const section = 'mx-auto max-w-6xl px-5 sm:px-8';
