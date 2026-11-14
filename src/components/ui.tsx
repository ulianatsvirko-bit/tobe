import type { ReactNode } from 'react';

type TitleProps = {
  kicker?: string;
  caps: ReactNode;
  script?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  className?: string;
};

/** Editorial heading: serif caps with a handwritten script word laid over it. */
export function Title({ kicker, caps, script, align = 'center', tone = 'dark', className = '' }: TitleProps) {
  const center = align === 'center';
  const ink = tone === 'dark' ? 'text-[var(--color-ink)]' : 'text-[var(--color-paper)]';
  const scriptColor = tone === 'dark' ? 'text-[var(--color-wine)]' : 'text-[var(--color-blush)]';
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {kicker && <p className={`kicker mb-4 ${tone === 'dark' ? 'text-[var(--color-wine)]' : 'text-[var(--color-gold)]'}`}>{kicker}</p>}
      <h2 className={`caps text-5xl sm:text-7xl ${ink}`}>
        {caps}
        {script && (
          <span className={`script -mt-3 block text-5xl normal-case sm:-mt-6 sm:text-7xl ${scriptColor} ${center ? '' : 'pl-10 sm:pl-24'}`}>
            {script}
          </span>
        )}
      </h2>
    </div>
  );
}

type PolaroidProps = {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  tape?: boolean;
  bw?: boolean;
  className?: string;
  imgClassName?: string;
};

export function Polaroid({ src, alt, caption, rotate = 0, tape = true, bw = false, className = '', imgClassName = 'aspect-square' }: PolaroidProps) {
  return (
    <figure className={`polaroid ${tape ? 'tape' : ''} ${className}`} style={{ rotate: `${rotate}deg` }}>
      <img src={src} alt={alt} className={`${bw ? 'bw' : ''} w-full object-cover ${imgClassName}`} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Marquee({ items, className = '' }: { items: string[]; className?: string }) {
  const row = items.map((item, i) => (
    <span key={i} className="flex items-center">
      <span className="px-6">{item}</span>
      <span aria-hidden="true">✦</span>
    </span>
  ));
  return (
    <div className={`marquee ${className}`} aria-label={items.join(', ')}>
      <div className="marquee-track" aria-hidden="true">
        {row}
        {row}
      </div>
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
