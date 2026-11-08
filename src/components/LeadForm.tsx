import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, Loader2, X } from 'lucide-react';

export type LeadFormState = {
  open: boolean;
  format: string;
};

type Props = LeadFormState & {
  onClose: () => void;
};

export default function LeadForm({ open, format, onClose }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!open) return;
    setStatus('idle');
    setMessage('');
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setMessage('Отправляем заявку…');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          contact: data.get('contact'),
          format: data.get('format'),
          age: data.get('age'),
          level: data.get('level'),
          goal: data.get('goal'),
          website: data.get('website'),
          submissionId: globalThis.crypto?.randomUUID?.() || `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true) throw new Error('Lead delivery failed');
      form.reset();
      setStatus('success');
      setMessage('Спасибо! Заявка отправлена. Я напишу тебе в ближайшее время, чтобы договориться о времени.');
    } catch {
      setStatus('error');
      setMessage('Не получилось отправить заявку. Попробуй ещё раз или напиши мне в Telegram.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="lead-form-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} aria-label="Закрыть форму" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          <X className="h-5 w-5" />
        </button>

        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--color-cherry)]">Бесплатно · ни к чему не обязывает</p>
        <h2 id="lead-form-title" className="pr-12 text-3xl font-bold sm:text-4xl">Давай познакомимся</h2>
        <p className="mt-3 text-gray-600">Ответь на несколько коротких вопросов — я напишу тебе и подберу пробный урок, группу или место в клубе.</p>

        {status === 'success' ? (
          <div className="mt-8 rounded-2xl bg-green-50 p-6 text-green-900">
            <CheckCircle2 className="mb-3 h-8 w-8" />
            <p className="font-semibold">{message}</p>
            <button type="button" onClick={onClose} className="mt-5 rounded-full bg-green-900 px-6 py-3 font-bold text-white">Закрыть</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">Как тебя зовут?
              <input name="name" required autoComplete="name" className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Имя" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">Как с тобой связаться?
              <input name="contact" required className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Email, телефон или @telegram" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">Возраст
                <select name="age" required defaultValue="" className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-cherry)]">
                  <option value="" disabled>Выбери</option>
                  <option>15–17 лет</option><option>18–20 лет</option><option>21–24 года</option><option>25+ лет</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">Уровень английского
                <select name="level" required defaultValue="" className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-cherry)]">
                  <option value="" disabled>Выбери</option>
                  <option>A1–A2</option><option>B1</option><option>B2+</option><option>Не знаю</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Что интересно
                <select name="format" required defaultValue={format || ''} className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-cherry)]">
                  <option value="" disabled>Выбери</option>
                  <option>Пробный урок</option><option>Групповой формат</option><option>Индивидуальный формат</option><option>Клуб ToBe Talks</option><option>Пока не знаю</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold">Зачем тебе английский? <span className="font-normal text-gray-400">необязательно</span>
              <textarea name="goal" rows={3} className="resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Например: стажировка, учёба за границей, просто хочу свободно говорить" />
            </label>
            <label className="hidden" aria-hidden="true">Сайт<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <button disabled={status === 'sending'} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-cherry)] px-7 py-4 font-bold text-white hover:bg-[var(--color-cherry-dark)] disabled:opacity-60">
              {status === 'sending' && <Loader2 className="h-5 w-5 animate-spin" />}
              Отправить заявку
            </button>
            {message && <p role="status" className={status === 'error' ? 'text-sm text-red-700' : 'text-sm text-gray-600'}>{message} {status === 'error' && <a className="font-bold underline" href="https://t.me/tsvirkouliana" target="_blank" rel="noreferrer">Написать в Telegram</a>}</p>}
            <p className="text-center text-xs text-gray-400">Отправляя форму, ты соглашаешься на обработку данных для связи по заявке.</p>
          </form>
        )}
      </div>
    </div>
  );
}
