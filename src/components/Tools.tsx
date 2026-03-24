import { motion } from 'motion/react';
import { GitBranch, Layout, MessageSquareDashed } from 'lucide-react';

export default function Tools() {
  const tools = [
    {
      title: "Mind Maps (Карты мыслей)",
      desc: "Вместо списков слов — логические схемы. Это помогает структурировать информацию и запоминать связи между понятиями.",
      icon: GitBranch,
      visual: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 flex items-center justify-center">
            <GitBranch className="w-24 h-24 text-gray-400" />
          </div>
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-16 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-[10px] font-bold shadow-sm">Topic</div>
            <div className="flex gap-4">
              <div className="w-12 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-[8px] shadow-sm">Idea 1</div>
              <div className="w-12 h-6 bg-white border border-gray-300 rounded flex items-center justify-center text-[8px] shadow-sm">Idea 2</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Visual Organizers",
      desc: "Таблицы и инфографика, которые объясняют грамматику без слов. Например, диаграмма Венна для сравнения психологии мужчин и женщин.",
      icon: Layout,
      visual: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 flex items-center justify-center relative">
           <div className="flex items-center justify-center -space-x-4">
             <div className="w-16 h-16 rounded-full border-2 border-blue-400 bg-blue-100/50 flex items-center justify-center text-[8px] text-blue-800 font-bold pr-2">Men</div>
             <div className="w-16 h-16 rounded-full border-2 border-pink-400 bg-pink-100/50 flex items-center justify-center text-[8px] text-pink-800 font-bold pl-2">Women</div>
           </div>
           <div className="absolute text-[8px] font-bold text-purple-800">Both</div>
        </div>
      )
    },
    {
      title: "Sentence Frames",
      desc: "Готовые шаблоны фраз, чтобы вы могли строить сложные предложения с первого дня, не задумываясь о грамматике.",
      icon: MessageSquareDashed,
      visual: (
        <div className="w-full h-32 bg-gray-50 rounded-lg border border-gray-200 p-4 flex flex-col justify-center gap-2">
          <div className="bg-white p-2 rounded border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400">I think that...</span>
            <div className="h-2 w-3/4 bg-gray-100 rounded mt-1"></div>
          </div>
          <div className="bg-white p-2 rounded border border-gray-200 shadow-sm">
            <span className="text-xs text-gray-400">Because...</span>
            <div className="h-2 w-1/2 bg-gray-100 rounded mt-1"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[var(--color-cherry)] font-semibold tracking-wide uppercase text-sm border-b-2 border-[var(--color-cherry)] pb-1">Инструменты ToBe.</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl mb-6">Как мы делаем сложное простым</h2>
            <p className="text-xl text-gray-600">
              Часто спрашивают: «Нужен ли высокий уровень английского?» Нет. 
              Мы даем вам «ключи» к пониманию <span className="italic font-serif text-gray-800">(Scaffolding)</span>.
            </p>
          </div>
          
          {/* Scroll Hint */}
          <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm font-medium">
            <span className="italic font-serif">Листайте вправо</span>
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center animate-pulse text-[var(--color-cherry)]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto pb-12 -mx-4 px-4 sm:px-0 gap-6 snap-x snap-mandatory scrollbar-hide">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[300px] md:min-w-[400px] bg-gray-50 rounded-3xl p-8 snap-center border border-gray-100 hover:border-[var(--color-cherry)]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="mb-8 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 h-48 flex items-center justify-center overflow-hidden">
                {tool.visual}
              </div>
              
              <div className="flex items-center gap-3 mb-4 mt-auto">
                <div className="p-2 rounded-lg bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                  <tool.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{tool.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {tool.desc}
              </p>
            </motion.div>
          ))}
          
          {/* Call to action card at the end */}
          <div className="min-w-[300px] md:min-w-[350px] bg-[var(--color-cherry)] rounded-3xl p-8 snap-center flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Хотите попробовать?</h3>
            <p className="mb-8 text-white/90">Запишитесь на бесплатный урок и увидите, как это работает на практике.</p>
            <a href="#cta" className="bg-white text-[var(--color-cherry)] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-full">
              Записаться
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
