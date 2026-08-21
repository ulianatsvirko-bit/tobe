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
          goal: data.get('goal'),
          website: data.get('website'),
          submissionId: globalThis.crypto?.randomUUID?.() || `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true) throw new Error('Lead delivery failed');
      form.reset();
      setStatus('success');
      setMessage('Спасибо! Заявка отправлена. Я свяжусь с вами, чтобы договориться о пробном уроке.');
    } catch {
      setStatus('error');
      setMessage('Не получилось отправить заявку. Попробуйте ещё раз или напишите в Telegram.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="lead-form-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="relative max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={onClose} aria-label="Закрыть форму" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          <X className="h-5 w-5" />
        </button>

        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[var(--color-cherry)]">Пробный урок · бесплатно</p>
        <h2 id="lead-form-title" className="pr-12 text-3xl font-bold sm:text-4xl">Давайте познакомимся</h2>
        <p className="mt-3 text-gray-600">Ответьте на несколько коротких вопросов. Я напишу вам и предложу подходящий формат для подростка или взрослого.</p>

        {status === 'success' ? (
          <div className="mt-8 rounded-2xl bg-green-50 p-6 text-green-900">
            <CheckCircle2 className="mb-3 h-8 w-8" />
            <p className="font-semibold">{message}</p>
            <button type="button" onClick={onClose} className="mt-5 rounded-full bg-green-900 px-6 py-3 font-bold text-white">Закрыть</button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold">Как вас зовут?
              <input name="name" required autoComplete="name" className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Ваше имя" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">Как с вами связаться?
              <input name="contact" required className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Email, телефон или @telegram" />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">Возраст ученика
                <select name="age" required defaultValue="" className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-cherry)]">
                  <option value="" disabled>Выберите</option>
                  <option>13–15 лет</option><option>16–17 лет</option><option>18+ лет</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold">Формат
                <select name="format" required defaultValue={format || ''} className="rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-cherry)]">
                  <option value="" disabled>Выберите</option>
                  <option>Групповой формат</option><option>Гибридный формат</option><option>Индивидуальный формат</option><option>Пока не знаю</option>
                </select>
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold">Что хочется улучшить? <span className="font-normal text-gray-400">необязательно</span>
              <textarea name="goal" rows={3} className="resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[var(--color-cherry)] focus:ring-2 focus:ring-[var(--color-cherry)]/20" placeholder="Например: начать свободнее говорить" />
            </label>
            <label className="hidden" aria-hidden="true">Ваш сайт<input name="website" tabIndex={-1} autoComplete="off" /></label>
            <button disabled={status === 'sending'} className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--color-cherry)] px-7 py-4 font-bold text-white hover:bg-[var(--color-cherry-dark)] disabled:opacity-60">
              {status === 'sending' && <Loader2 className="h-5 w-5 animate-spin" />}
              Отправить заявку
            </button>
            {message && <p role="status" className={status === 'error' ? 'text-sm text-red-700' : 'text-sm text-gray-600'}>{message} {status === 'error' && <a className="font-bold underline" href="https://t.me/tsvirkouliana" target="_blank" rel="noreferrer">Написать в Telegram</a>}</p>}
            <p className="text-center text-xs text-gray-400">Отправляя форму, вы соглашаетесь на обработку данных для связи по заявке.</p>
          </form>
        )}
      </div>
    </div>
  );
}
