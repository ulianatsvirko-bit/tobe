import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { openLeadForm } from '../lead-form';

const navLinks = [
  { name: 'метод', id: 'method' },
  { name: 'темы', id: 'tracks' },
  { name: 'клуб', id: 'club' },
  { name: 'цены', id: 'pricing' },
  { name: 'faq', id: 'faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const solid = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${solid ? 'bg-[var(--color-cream)]/90 py-3 shadow-sm backdrop-blur-md' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <button type="button" onClick={() => navigate('/')} className={`display z-50 text-3xl ${solid ? 'text-[var(--color-wine)]' : 'text-[var(--color-blush)]'}`}>
            tobe<span className="text-[var(--color-gold)]">.</span>
          </button>

          <nav className="hidden items-center gap-1 rounded-full bg-[var(--color-wine-deep)] px-3 py-1.5 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className="rounded-full px-4 py-2 text-sm text-[var(--color-paper)]/85 hover:bg-white/10 hover:text-white"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => openLeadForm('Пробный урок')}
            className="hidden rounded-full bg-[var(--color-blush)] px-5 py-2.5 text-sm font-semibold text-[var(--color-wine)] hover:bg-white md:inline-flex"
          >
            пробный урок →
          </button>

          <button
            type="button"
            className="z-50 -mr-2 rounded-full p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[var(--color-wine)]" />
            ) : (
              <Menu className={`h-6 w-6 ${solid ? 'text-[var(--color-wine)]' : 'text-[var(--color-blush)]'}`} />
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="paper safe-area-inset fixed inset-0 z-40 overflow-y-auto px-6 pt-24 md:hidden">
          <nav className="grid gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavigation(link.id)}
                className="caps border-b border-[var(--color-ink)]/10 py-3 text-left text-4xl text-[var(--color-ink)]"
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); openLeadForm('Пробный урок'); }}
              className="mt-6 rounded-full bg-[var(--color-wine)] px-8 py-4 text-lg font-semibold text-[var(--color-paper)]"
            >
              бесплатный пробный урок →
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
