import { openLeadForm } from '../lead-form';
import { section, btnPrimaryOnDark, btnGhostOnDark } from './ui';

export default function CTA() {
  return (
    <section id="cta" className="velvet py-24 text-center text-[var(--color-paper)] sm:py-32">
      <div className={section}>
        <p className="kicker text-[var(--color-blush)]/70">Твой знак начать</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.02] font-medium sm:text-7xl" style={{ textWrap: 'balance' }}>
          Знаешь больше. <em className="text-[var(--color-blush)]">Говоришь свободнее.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-lg text-white/75">
          Бесплатный пробный урок: определим уровень, попробуем задание по теме и подберём группу.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <button type="button" onClick={() => openLeadForm('Пробный урок')} className={btnPrimaryOnDark}>
            Записаться на пробный урок
          </button>
          <a href="https://t.me/tsvirkouliana" target="_blank" rel="noopener noreferrer" className={btnGhostOnDark}>
            Задать вопрос в Telegram
          </a>
        </div>
        <p className="mt-5 text-sm text-white/50">Бесплатно и ни к чему не обязывает</p>
      </div>
    </section>
  );
}
