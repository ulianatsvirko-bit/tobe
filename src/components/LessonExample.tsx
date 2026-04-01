import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, MessageSquare, Lightbulb, Globe, ChevronDown, ChevronUp } from 'lucide-react';

export default function LessonExample() {
  const [isOpen, setIsOpen] = useState(false);

  const steps = [
    {
      title: "1. Content (Содержание)",
      subtitle: "Дизайн и Психология",
      desc: "Как оттенки влияют на уровень кортизола и продуктивность. Почему в ресторанах быстрого питания используют желтый, а в спальнях — приглушенный синий.",
      icon: Palette,
    },
    {
      title: "2. Communication (Коммуникация)",
      subtitle: "Профессиональный вокабуляр",
      desc: "Мы учимся описывать атмосферу и визуальные эффекты на уровне профессионального декоратора.",
      highlights: [
        { label: "Key Vocabulary", text: "• Subdued tones (приглушенные тона) — для создания уюта.\n• To evoke a sense of... (вызывать чувство...) — ключевая фраза для презентации концепции.\n• Stimulate productivity (стимулировать продуктивность).\n• Cluttered vs. Minimalist (захламленный против минималистичного)." }
      ],
      icon: MessageSquare,
    },
    {
      title: "3. Cognition (Познание)",
      subtitle: "Пространственное мышление",
      desc: "Студент не просто читает, он анализирует и создает.",
      highlights: [
        { label: "Задание", text: "«Перед вами бриф: клиент — фрилансер с высоким уровнем стресса. Разработайте палитру для его домашнего офиса, аргументируя выбор каждого цвета на английском»." },
        { label: "Процесс", text: "Включение критического мышления через решение реальной задачи (Problem-based learning)." }
      ],
      icon: Lightbulb,
    },
    {
      title: "4. Culture (Культура)",
      subtitle: "Восприятие цвета в разных странах",
      desc: "Цвет — это культурный код. Мы изучаем, почему один и тот же цвет может восприниматься по-разному.",
      highlights: [
        { label: "Сравнение", text: "Почему белый цвет в западной культуре — это чистота и свадьба, а в некоторых восточных — траур. Как это учитывать при проектировании интерьеров для международных клиентов." }
      ],
      icon: Globe,
    }
  ];

  return (
    <section className="relative overflow-hidden py-16" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll'
    }}>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pb-4">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 text-white drop-shadow-lg">Как проходит урок в ToBe.</h2>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                    На примере урока про психологию цвета в интерьере
                  </p>
                  <div className="mt-4 flex justify-center items-center gap-2">
                    <span className="h-px w-12 bg-white/40"></span>
                    <span className="text-xs text-white/80 uppercase tracking-widest italic drop-shadow-sm">The 4C Framework</span>
                    <span className="h-px w-12 bg-white/40"></span>
                  </div>
                  <div className="mt-10 flex justify-center">
                    <img
                      src="/lesson-photo.jpg"
                      alt="Пример урока ToBe"
                      className="w-full max-w-2xl rounded-3xl shadow-2xl object-cover border border-white/20"
                      style={{ maxHeight: '420px', objectPosition: 'center' }}
                    />
                  </div>
                </div>

                <div className="relative max-w-[90rem] mx-auto">
                  {/* Vertical Line */}
                  <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2"></div>

                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col md:flex-row gap-8 items-center group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                      >
                        {/* Icon Marker */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border-2 border-white/40 z-10 flex items-center justify-center shadow-lg group-hover:bg-[var(--color-cherry)] group-hover:border-[var(--color-cherry)] transition-colors duration-500">
                          <step.icon className="h-5 w-5 text-white" />
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0">
                          <div className={`bg-[#FDFBF7]/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            {/* Arrow for Desktop */}
                            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-l border-white/40 transform rotate-45 ${idx % 2 === 0 ? '-right-2 border-r-0 border-t-0' : '-left-2 border-b-0 border-l-0 border-t border-r'}`}></div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                            <div className="text-[var(--color-cherry)] font-medium mb-4">{step.subtitle}</div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {step.desc}
                            </p>

                            {step.highlights && (
                              <div className={`space-y-4 bg-black/5 p-5 rounded-2xl border border-black/5 text-left ${idx % 2 === 0 ? 'md:ml-auto' : ''}`}>
                                {step.highlights.map((h, i) => (
                                  <div key={i} className="text-sm">
                                    <span className="font-bold text-gray-900 block mb-1">{h.label}:</span>
                                    <span className="text-gray-700 whitespace-pre-line leading-relaxed">{h.text}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Empty space for the other side */}
                        <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <div className={`text-center ${isOpen ? 'mt-4' : ''}`}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group inline-flex items-center gap-3 bg-[#FDFBF7]/90 backdrop-blur-md border border-white/40 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[var(--color-cherry)] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <span>{isOpen ? 'Скрыть пример урока' : 'Посмотреть пример урока'}</span>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
