import { motion } from 'motion/react';
import { ArrowLeft, Check, Calendar, Clock, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EssaysCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900" />
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Назад на главную
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-cherry)]/20 border border-[var(--color-cherry)]/30 text-sm font-medium text-[var(--color-cherry)] mb-6">
                  <BookOpen className="h-4 w-4" />
                  <span>Спецкурс</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                  101 Essays That Will <br />
                  <span className="text-[var(--color-cherry)] italic font-serif">Change The Way You Think</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                  Глубокое погружение в бестселлер Брианны Уист. Курс для тех, кто хочет не просто учить английский, а менять свое мышление.
                </p>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
                  Записаться на курс
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-72 md:w-96 aspect-[2/3] shadow-2xl rounded-r-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://i.ibb.co/N6z2RSP9/9781945796067-us.jpg" 
                    alt="101 Essays That Will Change The Way You Think Book Cover" 
                    className="w-full h-full object-cover rounded-r-2xl rounded-l-sm"
                  />
                  {/* Pages effect */}
                  <div className="absolute top-1 bottom-1 -right-2 w-4 bg-gray-100 rounded-r-sm shadow-inner border-l border-gray-200" />
                  <div className="absolute top-2 bottom-2 -right-3 w-3 bg-gray-50 rounded-r-sm shadow-sm border-l border-gray-200" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About the Course */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">О чем этот курс?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Это не просто чтение книги. Это серия интерактивных воркшопов, где мы разбираем ключевые эссе из книги. Мы обсуждаем психологию, саморазвитие, эмоциональный интеллект и жизненные установки — всё это на английском языке.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Users,
                  title: "Живые обсуждения",
                  desc: "Дискуссии в мини-группах. Вы научитесь выражать сложные мысли и аргументировать свою позицию."
                },
                {
                  icon: BookOpen,
                  title: "Глубокий анализ",
                  desc: "Разбор лексики и грамматических конструкций из книги. Мы учим язык через контекст."
                },
                {
                  icon: Calendar,
                  title: "Регулярная практика",
                  desc: "Занятия проходят раз в неделю. Между встречами — небольшие задания для рефлексии."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[var(--color-cherry)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Syllabus Preview */}
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-cherry)] rounded-full blur-[100px] opacity-20" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Темы, которые мы разберем:</h3>
                  <ul className="space-y-4">
                    {[
                      "Subconscious behaviors that are keeping you from having the life you want",
                      "The psychology of daily routine",
                      "How to control your emotional reactions",
                      "Why we self-sabotage",
                      "The difference between 'busy' and 'productive'"
                    ].map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[var(--color-cherry)] mt-1 shrink-0" />
                        <span className="text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center bg-white/5 p-8 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <Clock className="h-6 w-6 text-[var(--color-cherry)]" />
                    <div>
                      <p className="font-bold text-lg">Длительность курса</p>
                      <p className="text-gray-400">8 недель (8 занятий по 90 минут)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <Users className="h-6 w-6 text-[var(--color-cherry)]" />
                    <div>
                      <p className="font-bold text-lg">Формат</p>
                      <p className="text-gray-400">Онлайн в Zoom, группа до 6 человек</p>
                    </div>
                  </div>
                  <button className="w-full bg-[var(--color-cherry)] hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors">
                    Записаться в лист ожидания
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
