import { motion } from 'motion/react';
import { Book, MessageCircle, Brain, Globe } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      id: "01",
      title: "Content",
      subtitle: "Знания",
      desc: "Мы не учим «тему про еду», мы изучаем биологию или культуру стран. Вы получаете реальные знания, которые пригодятся в жизни.",
      icon: Book,
    },
    {
      id: "02",
      title: "Communication",
      subtitle: "Общение",
      desc: "Вы учитесь использовать английский не для тестов, а чтобы выражать свои мысли, спорить и договариваться.",
      icon: MessageCircle,
    },
    {
      id: "03",
      title: "Cognition",
      subtitle: "Мышление",
      desc: "Мы развиваем ваш интеллект. Вы учитесь анализировать информацию и находить нестандартные решения.",
      icon: Brain,
    },
    {
      id: "04",
      title: "Culture",
      subtitle: "Культура",
      desc: "Вы начинаете лучше понимать мир и людей вокруг, знакомитесь с разными менталитетами и становитесь настоящим «человеком мира».",
      icon: Globe,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-white/90 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-3 mb-4 drop-shadow-md">
            <span className="h-px w-12 bg-white/50"></span>
            Принцип «4C»
            <span className="h-px w-12 bg-white/50"></span>
          </span>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white drop-shadow-lg">Почему это работает?</h2>
          <p className="text-xl text-white/90 leading-relaxed drop-shadow-md">
            Четыре основы ToBe, которые делают обучение не только эффективным, но и по-настоящему увлекательным.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {principles.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-[#FDFBF7]/95 backdrop-blur-md rounded-[2rem] p-6 md:p-8 overflow-hidden border border-white/40 hover:border-[var(--color-cherry)]/30 hover:shadow-2xl hover:shadow-[var(--color-cherry)]/20 transition-all duration-500 shadow-xl"
            >
              {/* Huge Background Number */}
              <div className="absolute -top-4 -right-4 text-[100px] font-serif font-black text-gray-900/[0.03] group-hover:text-[var(--color-cherry)]/[0.05] transition-colors duration-500 leading-none select-none">
                {item.id}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-gray-100/50 text-[var(--color-cherry)] group-hover:scale-110 group-hover:bg-[var(--color-cherry)] group-hover:text-white transition-all duration-500">
                    <item.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">{item.title}</h3>
                    <div className="text-[var(--color-cherry)] font-medium mt-1 text-sm uppercase tracking-wider">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
