import { motion } from 'motion/react';
import { Award, GraduationCap, Globe } from 'lucide-react';

export default function Founder() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://i.ibb.co/6JRVBxtS/photo-2025-05-02-20-56-05.jpg" 
                alt="Ульяна - Основатель ToBe." 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm italic font-serif">"Я верю, что каждый может заговорить, если найдет свою тему"</p>
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400 uppercase tracking-widest font-medium italic">Founder & Lead Teacher</p>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-[var(--color-cherry)] rounded-full blur-3xl opacity-30" />
            <div className="absolute -top-6 -left-6 h-32 w-32 bg-blue-500 rounded-full blur-3xl opacity-20" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Кто вас обучает?</h2>
              <p className="text-xl font-medium text-[var(--color-cherry)]">Ульяна Цвирко</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ульяна создала ToBe с одной целью — сделать изучение английского таким же естественным, как познание мира в детстве. Её подход объединяет лучшие мировые практики CLIL-обучения с индивидуальным подходом к каждому студенту.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="p-2 rounded-lg bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">CAE Score A</p>
                  <p className="text-sm text-gray-500">Advanced English</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="p-2 rounded-lg bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">TESOL</p>
                  <p className="text-sm text-gray-500">Certified Teacher</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 sm:col-span-2">
                <div className="p-2 rounded-lg bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">TKT CLIL Band 4</p>
                  <p className="text-sm text-gray-500">Expert in Content and Language Integrated Learning</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white shadow-sm border border-gray-100 sm:col-span-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-cherry)]/10 text-[var(--color-cherry)]">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 leading-tight">ВШЭ Профессиональная переподготовка</p>
                    <p className="text-xs text-gray-500">Москва · Высшая Школа Экономики</p>
                  </div>
                </div>
                <div className="pl-1">
                  <p className="font-medium text-gray-800 mb-1">Преподаватель английского языка</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Программа профессиональной переподготовки, направленная на получение квалификации и диплома преподавателя английского языка.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
