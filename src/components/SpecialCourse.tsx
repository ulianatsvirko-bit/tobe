import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SpecialCourse() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[var(--color-cherry)] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 backdrop-blur-sm">
              <BookOpen className="h-4 w-4" />
              <span>Special Course</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              101 Essays That Will <br />
              <span className="text-[var(--color-cherry)] italic font-serif">Change The Way You Think</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Уникальный курс по бестселлеру Брианны Уист. Мы не просто читаем — мы разбираем глубокие смыслы, учимся мыслить критически и обсуждаем важные жизненные вопросы на английском языке.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/101-essays">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-gray-900 transition-all hover:bg-gray-100"
                >
                  Узнать подробнее
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 md:w-80 aspect-[2/3] rounded-r-2xl rounded-l-sm shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://i.ibb.co/N6z2RSP9/9781945796067-us.jpg" 
                alt="101 Essays That Will Change The Way You Think Book Cover" 
                className="w-full h-full object-cover rounded-r-2xl rounded-l-sm"
              />
              
              {/* Pages effect */}
              <div className="absolute top-1 bottom-1 -right-2 w-4 bg-gray-100 rounded-r-sm shadow-inner border-l border-gray-200" />
              <div className="absolute top-2 bottom-2 -right-3 w-3 bg-gray-50 rounded-r-sm shadow-sm border-l border-gray-200" />
            </div>
            
            {/* Decorative circle behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full -z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
