import { Title, Photo, section } from './ui';

const facts = [
  ['5 лет', 'преподаю английский'],
  ['30+', 'учеников'],
  ['92 / 100', 'ЦТ по английскому'],
  ['БГУ', 'бизнес-администрирование на английском'],
];

export default function Founder() {
  return (
    <section id="founder" className="border-t border-[var(--color-ink)]/10 bg-[var(--color-cream)] py-24 sm:py-32">
      <div className={`${section} grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center`}>
        <Photo
          src="https://i.ibb.co/6JRVBxtS/photo-2025-05-02-20-56-05.jpg"
          alt="Ульяна Цвирко — основатель ToBe."
          tilt={-1.5}
          className="mx-auto w-full max-w-sm"
        />

        <div>
          <Title n="05" label="Кто преподаёт" accent="я Ульяна">Привет,</Title>
          <div className="mt-8 max-w-xl space-y-4 text-lg leading-relaxed text-[var(--color-ink)]/75">
            <p>Я преподаю английский с 14 лет — за это время у меня занимались больше 30 учеников.</p>
            <p>
              CLIL для меня не теория из учебника. Я сама так учусь каждый день: изучаю бизнес-администрирование на английском в Институте бизнеса БГУ. Поэтому знаю, как это работает — и как сделать, чтобы работало у тебя.
            </p>
          </div>
          <p className="mt-8 font-serif text-2xl italic text-[var(--color-wine)]">«Каждый может заговорить, если найдёт свою тему».</p>

          <dl className="mt-10 grid grid-cols-2 gap-px bg-[var(--color-ink)]/10 sm:grid-cols-4">
            {facts.map(([value, label]) => (
              <div key={label} className="bg-[var(--color-cream)] py-4 pr-4">
                <dt className="font-serif text-3xl font-medium">{value}</dt>
                <dd className="mt-1 text-sm text-[var(--color-ink)]/60">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-[var(--color-ink)]/55">Сейчас готовлюсь к CAE (Cambridge C1 Advanced).</p>
        </div>
      </div>
    </section>
  );
}
