import { motion } from 'motion/react';
import { XCircle, CheckCircle, Brain, Lightbulb } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-16 sm:py-24 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 relative inline-block">
            Почему обычная учеба надоедает?
            <div className="absolute -bottom-2 right-0 w-1/2 h-1 bg-gray-200 rounded-full" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            В большинстве школ нас заставляют использовать только память. <br/>
            <span className="italic text-gray-400 text-sm">Это называют LOTS (Lower Order Thinking Skills).</span>
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-center relative">
          {/* VS Badge desktop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-xl border-4 border-gray-50 text-xl font-black text-gray-300 italic">
            VS
          </div>
          {/* VS divider mobile */}
          <div className="lg:hidden flex items-center gap-4 order-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-base font-black text-gray-300 italic">VS</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* The Old Way (LOTS) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gray-50 p-6 sm:p-12 border border-gray-200 relative group hover:border-gray-300 transition-colors"
          >
            <div className="absolute top-6 right-6 text-gray-200 font-black text-4xl sm:text-5xl opacity-50 select-none">OLD</div>
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-xl bg-white shadow-sm text-gray-500 border border-gray-100">
                <Brain className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">LOTS</h3>
                <p className="text-xs font-serif italic text-gray-400">Lower Order Thinking Skills</p>
              </div>
            </div>

            <ul className="space-y-6 relative z-10">
              {[
                "Скучная зубрежка слов по списку",
                "Перевод текстов, которые вам не пригодятся",
                "Упражнения в тетрадке вместо живого общения"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-gray-200 text-gray-500">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <span className="text-lg text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-8 border-t border-gray-200/60">
              <p className="font-medium text-gray-500 italic text-sm leading-relaxed">
                "Результат: Мозгу становится скучно. Вы тратите годы, но так и не можете свободно заговорить."
              </p>
            </div>
          </motion.div>

          {/* The ToBe Way (HOTS) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl ring-4 ring-[var(--color-cherry)]/20"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://i.ibb.co/Tq23tS8Y/To-Be.jpg" 
                alt="Background" 
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[var(--color-cherry)] rounded-full blur-[80px] opacity-30 animate-pulse z-0"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="p-3 rounded-xl bg-white text-gray-900 shadow-lg">
                <Lightbulb className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">HOTS</h3>
                <p className="text-xs font-serif italic text-white/60">Higher Order Thinking Skills</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <p className="text-xl font-medium leading-relaxed">
                В <span className="text-white font-bold text-2xl underline decoration-white/30 underline-offset-8">ToBe.</span> мы все меняем.
              </p>
              <p className="text-lg text-gray-100 border-l-2 border-white/50 pl-4">
                Мы подключаем ваши HOTS. Мы учим вас думать, анализировать и создавать что-то свое.
              </p>
              
              <div className="flex items-start gap-4 mt-8 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <CheckCircle className="h-6 w-6 text-white shrink-0 mt-1" />
                <span className="text-base text-white/90 italic">Английский запоминается сам собой, потому что он становится инструментом для решения интересных задач.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
