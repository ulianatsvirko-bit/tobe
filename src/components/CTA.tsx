import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[var(--color-cherry)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-6xl mb-6 sm:mb-8">
            Хватит тратить время на скучную учебу. <br />
            <span className="italic font-serif">Начните Быть.</span>
          </h2>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-[var(--color-cherry)] transition-all hover:bg-gray-100 hover:shadow-2xl"
          >
            Записаться на встречу и проверить свой уровень
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <p className="mt-6 text-white/60 text-sm italic font-serif">Это бесплатно и ни к чему вас не обязывает</p>
        </motion.div>
      </div>
    </section>
  );
}
