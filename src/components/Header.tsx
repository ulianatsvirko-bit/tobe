import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${id}`);
      // We need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Метод', id: 'method' },
    { name: 'Направления', id: 'tracks' },
    { name: 'Форматы', id: 'pricing' },
    { name: 'Результаты', id: 'results' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer z-50 flex items-center gap-1" 
            onClick={() => navigate('/')}
          >
            <span className={`font-serif font-bold text-2xl ${isScrolled || !isHome ? 'text-gray-900' : 'text-white'}`}>
              ToBe<span className="text-[var(--color-cherry)]">.</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-medium opacity-50 ${isScrolled || !isHome ? 'text-gray-500' : 'text-white'}`}>Academy</span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                whileHover={{ y: -2 }}
                onClick={() => handleNavigation(link.id)}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-cherry)] ${
                  isScrolled || !isHome ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('cta')}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                isScrolled || !isHome
                  ? 'bg-[var(--color-cherry)] text-white hover:bg-[var(--color-cherry-dark)]' 
                  : 'bg-white text-[var(--color-cherry)] hover:bg-gray-100'
              }`}
            >
              Записаться
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || !isHome ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || !isHome ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6"
          >
            <nav className="grid grid-cols-2 gap-4 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.id)}
                  className="p-4 rounded-2xl bg-gray-50 text-lg font-medium text-gray-900 hover:text-[var(--color-cherry)] hover:bg-gray-100 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('cta')}
                className="col-span-2 mt-2 rounded-full bg-[var(--color-cherry)] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[var(--color-cherry)]/30"
              >
                Записаться
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
