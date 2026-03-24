import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Problem from '../components/Problem';
import Comparison from '../components/Comparison';
import Principles from '../components/Principles';
import Tools from '../components/Tools';

export default function MethodPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="pt-32 flex-grow">
        {/* Page Header Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8 text-center flex flex-col items-center">
          <Link 
            to="/" 
            className="group inline-flex items-center gap-2 text-gray-500 hover:text-[var(--color-cherry)] transition-colors mb-12 font-medium bg-gray-50 hover:bg-[var(--color-cherry)]/5 px-5 py-2.5 rounded-full border border-gray-100"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Вернуться на главную</span>
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-[var(--color-cherry)] font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-[var(--color-cherry)]/30"></span>
              Обучение со смыслом
              <span className="h-px w-12 bg-[var(--color-cherry)]/30"></span>
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
              Метод <span 
                className="text-transparent bg-clip-text bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.ibb.co/Tq23tS8Y/To-Be.jpg')" }}
              >CLIL</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Мы используем предметно-языковое интегрированное обучение. Это значит, что вы учите не просто абстрактные правила, а познаете реальный мир через английский язык.
            </p>
          </motion.div>
        </section>

        {/* Connector 1 */}
        <div className="w-full flex flex-col items-center relative z-10 -mb-12 mt-8">
          <div className="h-24 w-px bg-gradient-to-b from-transparent to-gray-300"></div>
          <div className="bg-white border border-gray-200 text-gray-500 px-6 py-2.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
            <ArrowDown className="w-4 h-4" />
            <span>Почему мы отказались от стандартов</span>
          </div>
        </div>

        <Problem />

        {/* Connector 2 */}
        <div className="w-full bg-gradient-to-b from-white to-gray-50 flex flex-col items-center relative z-10 -mb-12 pt-8">
          <div className="h-24 w-px bg-gradient-to-b from-gray-100 to-gray-300"></div>
          <div className="bg-white border border-gray-200 text-gray-500 px-6 py-2.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
            <ArrowDown className="w-4 h-4" />
            <span>Как выглядит наш подход</span>
          </div>
        </div>

        <Comparison />

        {/* Connector 3 */}
        <div className="w-full bg-gradient-to-b from-gray-50 to-[#FDFBF7] flex flex-col items-center relative z-10 -mb-12 pt-8">
          <div className="h-24 w-px bg-gradient-to-b from-gray-200 to-[var(--color-cherry)]/50"></div>
          <div className="bg-[var(--color-cherry)] text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md shadow-[var(--color-cherry)]/20 flex items-center gap-2">
            <ArrowDown className="w-4 h-4" />
            <span>На чём строится метод</span>
          </div>
        </div>

        <Principles />

        {/* Connector 4 */}
        <div className="w-full bg-gradient-to-b from-white to-white flex flex-col items-center relative z-10 -mb-12 pt-8">
          <div className="h-24 w-px bg-gradient-to-b from-gray-200 to-gray-300"></div>
          <div className="bg-white border border-gray-200 text-gray-500 px-6 py-2.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
            <ArrowDown className="w-4 h-4" />
            <span>Инструменты обучения</span>
          </div>
        </div>

        <Tools />
      </main>
      <Footer />
    </div>
  );
}
