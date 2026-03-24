import { motion } from 'motion/react';
import { Smile, Zap, BookOpen, Users } from 'lucide-react';

export default function Results() {
  const results = [
    {
      title: "Уверенность в себе",
      desc: "Вы начнете думать на английском, а не переводить фразы в голове.",
      icon: Smile,
    },
    {
      title: "Гибкий мозг",
      desc: "Вы станете быстрее соображать и находить решения в сложных ситуациях.",
      icon: Zap,
    },
    {
      title: "Знания, которые останутся",
      desc: "Вы разберетесь в темах, о которых раньше только слышали.",
      icon: BookOpen,
    },
    {
      title: "Крутое окружение",
      desc: "Вы познакомитесь с людьми, которые тоже хотят развиваться.",
      icon: Users,
    }
  ];

  return (
    <section id="results" className="py-24 relative overflow-hidden" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 relative inline-block text-white drop-shadow-lg">
            Что вы получите в итоге?
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full" />
          </h2>
          <p className="mt-4 text-white/80 italic text-sm drop-shadow-md">Результаты, которые можно измерить не только в словах</p>
        </div>

        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((res, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-6 md:p-8 hover:border-white/50 hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-[var(--color-cherry)] group-hover:scale-110 group-hover:rotate-3">
                <res.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors">{res.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
