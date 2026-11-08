import { Video, MapPin, ArrowRight } from 'lucide-react';
import { openLeadForm } from '../lead-form';

export default function Club() {
  return (
    <section id="club" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-cherry)]">Разговорный клуб</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">ToBe Talks</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Хочешь сначала попробовать? Приходи в клуб: одна тема, живое обсуждение на английском и люди, которым тоже интересно.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl bg-gray-900 p-6 text-white sm:p-8">
            <Video className="h-8 w-8 text-[var(--color-cherry-light)]" />
            <h3 className="mt-4 text-2xl font-bold">Онлайн</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-white/60">Бесплатно · раз в 2 недели</p>
            <p className="mt-4 flex-1 text-white/80">
              60 минут в Zoom, до 12 участников. Например: «Почему мы покупаем то, что не носим?». Нужен уровень от A2.
            </p>
            <button
              type="button"
              onClick={() => openLeadForm('Клуб ToBe Talks')}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-gray-900 hover:bg-gray-100"
            >
              Записаться в клуб
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <MapPin className="h-8 w-8 text-[var(--color-cherry)]" />
            <h3 className="mt-4 text-2xl font-bold">ToBe Talks Live · Минск</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-gray-400">Скоро</p>
            <p className="mt-4 flex-1 text-gray-600">
              Встречи вживую в кофейнях и коворкингах Минска: fashion swap на английском, питчи идей и просто хорошие разговоры. Следи за анонсами в Instagram.
            </p>
            <a
              href="https://instagram.com/tsvirkouliana"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3.5 font-bold text-gray-900 hover:bg-white"
            >
              Следить за анонсами
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
