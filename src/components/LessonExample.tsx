import { openLeadForm } from '../lead-form';
import { Title } from './ui';

const vocab = ['subdued tones', 'to evoke a sense of…', 'stimulate productivity', 'cluttered vs minimalist'];

export default function LessonExample() {
  return (
    <section id="lesson" className="velvet relative overflow-hidden py-20 text-[var(--color-paper)] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Title kicker="пример урока · 4C framework" caps="как проходит" script="урок" tone="light" />
        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-white/75">
          Тема занятия — психология цвета в интерьере. Четыре шага, по которым строится каждый урок ToBe.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2" style={{ ['--hole' as string]: '#4A0E17' }}>
          <div className="notebook -rotate-1 text-[var(--color-ink)]">
            <p className="kicker text-[var(--color-wine)]">01 · content</p>
            <h3 className="script mt-1 text-4xl text-[var(--color-wine)]">узнаём новое</h3>
            <p className="mt-2 leading-8 text-[var(--color-ink)]/75">
              Как оттенки влияют на настроение и продуктивность. Почему в фастфуде используют жёлтый, а в спальнях — приглушённый синий.
            </p>
          </div>

          <div className="notebook rotate-1 text-[var(--color-ink)]">
            <p className="kicker text-[var(--color-wine)]">02 · communication</p>
            <h3 className="script mt-1 text-4xl text-[var(--color-wine)]">говорим как профи</h3>
            <p className="mt-2 leading-8 text-[var(--color-ink)]/75">Учимся описывать атмосферу языком декоратора:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {vocab.map((v, i) => (
                <span key={v} className={`pill ${i % 2 ? 'border border-[var(--color-ink)]/25' : 'bg-[var(--color-ink)] text-[var(--color-paper)]'}`}>{v}</span>
              ))}
            </div>
          </div>

          <div className="notebook rotate-1 text-[var(--color-ink)]">
            <p className="kicker text-[var(--color-wine)]">03 · cognition</p>
            <h3 className="script mt-1 text-4xl text-[var(--color-wine)]">решаем задачу</h3>
            <p className="mt-2 font-serif text-xl italic leading-8 text-[var(--color-ink)]/85">
              «Клиент — фрилансер с высоким уровнем стресса. Разработай палитру для его домашнего офиса и объясни выбор каждого цвета на английском».
            </p>
          </div>

          <div className="notebook -rotate-1 text-[var(--color-ink)]">
            <p className="kicker text-[var(--color-wine)]">04 · culture</p>
            <h3 className="script mt-1 text-4xl text-[var(--color-wine)]">смотрим шире</h3>
            <p className="mt-2 leading-8 text-[var(--color-ink)]/75">
              Почему белый на Западе — цвет свадьбы, а в некоторых странах Востока — траура. И как это учитывать, работая с международными клиентами.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => openLeadForm('Пробный урок')}
            className="rounded-full bg-[var(--color-blush)] px-8 py-4 font-semibold text-[var(--color-wine)] hover:bg-white"
          >
            хочу попробовать такой урок →
          </button>
        </div>
      </div>
    </section>
  );
}
