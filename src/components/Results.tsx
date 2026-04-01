import { motion } from 'motion/react';

export default function Results() {
  const results = [
    {
      metric: "B1 → B2",
      period: "за 3 месяца",
      desc: "Средний прогресс по уровню за один семестр обучения",
    },
    {
      metric: "87%",
      period: "говорят без перевода",
      desc: "Учеников перестают «переводить в голове» уже после первого модуля",
    },
    {
      metric: "1 неделя",
      period: "до первого результата",
      desc: "После первого занятия вы начнёте использовать новые слова в реальной речи",
    },
    {
      metric: "50+",
      period: "тем на выбор",
      desc: "Психология, бизнес, кино, искусство, наука — учим через то, что интересно вам",
    }
  ];

  return (
    <section id="results" className="py-16 sm:py-24 relative overflow-hidden" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'scroll'
    }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4 relative inline-block text-white drop-shadow-lg">
            Результаты в цифрах
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/30 rounded-full" />
          </h2>
          <p className="mt-4 text-white/80 text-sm drop-shadow-md">На основе занятий с учениками ToBe</p>
        </div>

        <div className="grid gap-4 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 md:p-8 hover:border-white/50 hover:bg-white/20 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
            >
              <div className="mb-3">
                <span className="text-4xl sm:text-5xl font-black text-white leading-none">{res.metric}</span>
              </div>
              <div className="mb-4">
                <span className="text-sm font-bold text-white/70 uppercase tracking-widest">{res.period}</span>
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
