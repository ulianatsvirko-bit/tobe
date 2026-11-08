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
