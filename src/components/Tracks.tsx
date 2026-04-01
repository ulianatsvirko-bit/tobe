import { motion } from 'motion/react';
import { User, Users, ArrowRight } from 'lucide-react';

export default function Tracks() {
  const topics = [
    "Наука", "Искусство", "Культура", "Творчество", 
    "Дизайн", "Бизнес", "Маркетинг", "Переговоры", 
    "Психология отношений", "Кинематограф", "Музыка"
  ];

  return (
    <section id="tracks" className="pt-16 sm:pt-24 pb-12 sm:pb-16 overflow-hidden relative" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-3xl">
          <span className="text-white/90 font-semibold tracking-widest uppercase text-xs mb-4 block drop-shadow-md">Форматы обучения</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            Как мы выбираем темы?
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Description & Topics Cloud */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="text-xl text-white/90 leading-relaxed mb-10 drop-shadow-md">
                Мы не ограничиваемся учебниками. Выбирайте темы, которые интересны именно вам, и погружайтесь в язык через них.
              </p>
              
              {/* Topics Cloud */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                {topics.map((topic, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: idx * 0.05, type: "spring", stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotate: idx % 2 === 0 ? 2 : -2,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                    }}
                    className="px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium cursor-pointer transition-all duration-300 border border-white/40 text-gray-900 bg-[#FDFBF7]/90 backdrop-blur-md relative overflow-hidden shadow-lg rounded-xl hover:bg-white hover:text-[var(--color-cherry)]"
                  >
                    <span className="relative z-10">{topic}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10 flex items-center gap-4 opacity-80"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/50"></div>
                <span className="text-xs font-bold tracking-widest text-white uppercase drop-shadow-md">И десятки других тем</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/50"></div>
              </motion.div>
            </div>
          </div>
          
          {/* Right Column: List */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-8">
              {/* Group Track */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative bg-[#FDFBF7]/95 backdrop-blur-md p-5 sm:p-8 rounded-[2rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                  <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-gray-100/50 flex items-center justify-center text-gray-400 group-hover:text-[var(--color-cherry)] group-hover:bg-[var(--color-cherry)]/5 group-hover:border-[var(--color-cherry)]/20 transition-all duration-500">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Комплексные треки</span>
                      <span className="w-8 h-[1px] bg-gray-300 transition-all duration-500 group-hover:w-12 group-hover:bg-[var(--color-cherry)]"></span>
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-3 sm:mb-4 group-hover:text-[var(--color-cherry)] transition-colors duration-500">
                      В мини-группах
                    </h4>
                    <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                      Мы объединяем темы в логичные блоки по интересам группы. Например, <span className="font-medium text-gray-900">«Творческий трек»</span> (Музыка, Искусство, Кино), <span className="font-medium text-gray-900">«Бизнес-трек»</span> (Маркетинг, Переговоры) или <span className="font-medium text-gray-900">«Общий»</span> (Психология, Культура).
                    </p>
                    <a href="#pricing" className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-[var(--color-cherry)] transition-colors group/link">
                      Смотреть цены
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Individual Track */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#FDFBF7]/95 backdrop-blur-md p-5 sm:p-8 rounded-[2rem] border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                  <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm border border-gray-100/50 flex items-center justify-center text-gray-400 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-500">
                    <User className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2 sm:mb-3">
                      <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Полная свобода</span>
                      <span className="w-8 h-[1px] bg-gray-300 transition-all duration-500 group-hover:w-12 group-hover:bg-blue-600"></span>
                    </div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-500">
                      Индивидуально
                    </h4>
                    <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                      Вы сами собираете свой идеальный курс. Хотите сегодня обсуждать маркетинг, а на следующем занятии — кинематограф? Легко. Мы адаптируем программу точечно под ваши текущие интересы.
                    </p>
                    <a href="#pricing" className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-sm font-bold uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors group/link">
                      Смотреть цены
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
