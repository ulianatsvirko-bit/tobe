import { Title, Polaroid } from './ui';

const facts = ['5 лет преподавания', '30+ учеников', 'ЦТ по английскому — 92/100', 'бизнес на английском · Институт бизнеса БГУ', 'готовлюсь к CAE (C1)'];

export default function Founder() {
  return (
    <section id="founder" className="paper overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto h-[460px] w-full max-w-md sm:h-[540px]">
            <Polaroid
              src="https://i.ibb.co/6JRVBxtS/photo-2025-05-02-20-56-05.jpg"
              alt="Ульяна Цвирко — основатель ToBe."
              caption="hi, it's me"
              rotate={-3}
              bw
              imgClassName="aspect-[4/5]"
              className="absolute left-0 top-0 z-10 w-[78%]"
            />
            <Polaroid
              src="/mood/fashion-books.jpg"
              alt="Книги о моде"
              caption="current reading"
              rotate={8}
              tape={false}
              imgClassName="aspect-[4/3] object-contain"
              className="absolute right-0 bottom-0 z-20 w-[52%]"
            />
            <img src="/mood/black-cat.jpg" alt="" aria-hidden="true" className="absolute -right-4 top-6 w-28 rotate-6 rounded-full border-4 border-white object-cover shadow-xl aspect-square" />
          </div>

          <div>
            <Title kicker="nº 05 · кто преподаёт" caps="привет," script="я ульяна" align="left" />
            <div className="notebook mt-10">
              <div className="space-y-4 text-[17px] leading-8 text-[var(--color-ink)]/80">
                <p>Я преподаю английский с 14 лет — за это время у меня занимались больше 30 учеников.</p>
                <p>
                  CLIL для меня не теория из учебника. Я сама так учусь каждый день: изучаю бизнес-администрирование на английском в Институте бизнеса БГУ. Поэтому знаю, как это работает — и как сделать, чтобы работало у тебя.
                </p>
                <p className="script text-4xl text-[var(--color-wine)]">каждый может заговорить, если найдёт свою тему</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {facts.map((fact, i) => (
                <span key={fact} className={`pill ${i % 2 ? 'bg-[var(--color-blush)] text-[var(--color-wine)]' : 'bg-[var(--color-wine)] text-[var(--color-paper)]'}`}>{fact}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
