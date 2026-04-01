import { motion } from 'motion/react';
import { BookOpen, LifeBuoy, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Method() {
  const features = [
    {
      title: "Интересные темы",
      desc: "Мы обсуждаем психологию, искусство или устройство бизнеса.",
      icon: BookOpen
    },
    {
      title: "Живой опыт",
      desc: "Вы заняты делом, а английский «прилипает» сам собой, потому что он вам нужен прямо сейчас.",
      icon: Zap
    },
    {
      title: "Языковая поддержка (Scaffolding)",
      desc: "Мы используем схемы и картинки, чтобы вы все понимали, даже если ваш уровень английского пока невысок.",
      icon: LifeBuoy
    }
  ];

  return (
    <section id="method" className="py-16 sm:py-24 overflow-hidden relative" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-white/90 font-bold tracking-wide uppercase text-sm flex items-center gap-2 drop-shadow-md">
              <span className="h-px w-8 bg-white/50"></span>
              Метод CLIL
            </span>
            <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl mb-6 leading-tight relative text-white drop-shadow-lg">
              Как мы возвращаем вам естественную способность учиться
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                className="h-1 bg-white/50 mt-4 rounded-full"
              />
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed italic drop-shadow-md">
              "Вспомните: в детстве вы не учили родной язык по учебникам — вы просто познавали мир."
            </p>
            
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 sm:gap-6 bg-[#FDFBF7]/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[var(--color-cherry)] border border-gray-100/50 group-hover:scale-110 group-hover:bg-[var(--color-cherry)] group-hover:text-white transition-all duration-500">
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile-only CTA button */}
            <div className="mt-6 lg:hidden">
              <Link to="/method">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md border border-white/40 px-6 py-3.5 text-sm font-bold text-gray-900 transition-all shadow-xl hover:bg-white hover:text-[var(--color-cherry)]"
                >
                  Узнать подробнее про метод
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
             <div className="aspect-square rounded-full bg-white/10 blur-3xl absolute inset-0 animate-pulse"></div>
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.8 }}
               className="relative flex flex-col justify-center items-center"
             >
               <img 
                 src="/method-photo.jpg" 
                 alt="Живой урок ToBe" 
                 className="w-4/5 h-auto object-cover rounded-3xl drop-shadow-2xl mb-8 mx-auto"
               />
               <div className="text-center w-full">
                 <p className="text-lg md:text-xl font-medium text-white/90 mb-6 drop-shadow-md">
                   Мы используем Кембриджскую методику CLIL
                 </p>
                 <Link to="/method">
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="group inline-flex items-center gap-2 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md border border-white/40 px-8 py-4 text-base font-bold text-gray-900 transition-all shadow-xl hover:shadow-2xl hover:bg-white hover:text-[var(--color-cherry)]"
                   >
                     Узнать подробнее про метод
                     <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                   </motion.button>
                 </Link>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
