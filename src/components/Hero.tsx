import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" style={{
      backgroundImage: 'url("https://i.ibb.co/Tq23tS8Y/To-Be.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl w-full items-center text-center sm:items-start sm:text-left">
        
        {/* Micro-label */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden sm:flex items-center justify-start gap-4 mb-4"
        >
          <span className="h-px w-12 bg-[var(--color-cherry)]"></span>
          <span className="text-white/80 uppercase tracking-[0.2em] text-xs font-bold">
            CLIL Methodology
          </span>
        </motion.div>

        {/* Massive Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4"
        >
          <h1 className="font-serif text-[18vw] sm:text-[140px] md:text-[180px] leading-[0.85] text-white tracking-tighter">
            ToBe<span className="text-[var(--color-cherry)]">.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mb-8"
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed">
            Языковая школа, где осваивают английский так же естественно, как и родной язык в детстве.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <a 
            href="#cta" 
            className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold overflow-hidden rounded-full transition-all hover:shadow-2xl hover:shadow-white/20 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-3 transition-colors group-hover:text-white">
              Записаться
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-[var(--color-cherry)] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </a>
          
          <a 
            href="#pricing" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-semibold text-white border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors duration-500 w-full sm:w-auto"
          >
            Форматы
          </a>
        </motion.div>
      </div>

      {/* Vertical Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-10"
      >
        <span 
          className="text-white/50 text-xs uppercase tracking-[0.3em] whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Листайте вниз
        </span>
        <div className="relative w-px h-24 bg-white/10 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-white" 
          />
        </div>
      </motion.div>
    </section>
  );
}
