import { Title, Polaroid } from './ui';

const before = [
  'учишь английский 10 лет, а заговорить страшно',
  'знаешь правила, но в разговоре всё вылетает',
  'темы из учебника: погода, хобби, «моя семья»',
  'хочется сказать что-то умное — а не о чем',
];

const after = [
  'обсуждаешь то, что тебе правда интересно',
  'узнаёшь новое о моде, психологии и бизнесе',
  'говоришь с первого занятия — с опорами и шаблонами фраз',
  'английский становится инструментом, а не предметом',
];

export default function Pain() {
  return (
    <section className="paper relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Title kicker="nº 01 · the problem" caps="знакомо" script="это чувство?" />

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto h-[380px] w-full max-w-lg sm:h-[440px]">
            <Polaroid
              src="/mood/satc.jpg"
              alt="Скучающие героини сериала"
              caption="мы на обычном уроке английского"
              rotate={-4}
              bw
              imgClassName="aspect-[16/10]"
              className="absolute left-0 top-0 w-[88%]"
            />
            <Polaroid
              src="/mood/newspapers.jpg"
              alt="Девушки прячутся за газетами"
              caption="«any questions?»"
              rotate={6}
              bw
              imgClassName="aspect-[16/10]"
              className="absolute right-0 bottom-0 w-[64%]"
            />
          </div>

          <div className="grid gap-8">
            <div className="notebook -rotate-1">
              <p className="script text-4xl text-[var(--color-wine)]">обычный английский:</p>
              <ul className="mt-4 space-y-3 text-[17px] leading-8 text-[var(--color-ink)]/70">
                {before.map((item) => (
                  <li key={item} className="line-through decoration-[var(--color-wine)]/70 decoration-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="velvet relative rotate-1 rounded-[28px] p-8 text-[var(--color-paper)] shadow-2xl sm:p-10">
              <p className="script text-5xl text-[var(--color-blush)]">а в tobe.</p>
              <ul className="mt-5 space-y-3">
                {after.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px]">
                    <span className="text-[var(--color-gold)]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
