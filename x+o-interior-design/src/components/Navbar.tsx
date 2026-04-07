import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const NAV_LINKS = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6',
        isScrolled ? 'glass py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Diamond className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-45" />
          <span className="text-2xl font-display font-bold tracking-widest text-accent">
            X+O
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest hover-gold transition-colors',
                location.pathname === link.path ? 'text-primary' : 'text-accent/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-2 border-l border-white/10 pl-8 ml-2">
            <Globe size={14} className="text-accent/40" />
            <button 
              onClick={() => setLanguage('en')}
              className={cn(
                'text-[10px] font-bold uppercase tracking-widest transition-colors',
                language === 'en' ? 'text-primary' : 'text-accent/40 hover:text-accent'
              )}
            >
              EN
            </button>
            <span className="text-white/10">/</span>
            <button 
              onClick={() => setLanguage('vi')}
              className={cn(
                'text-[10px] font-bold uppercase tracking-widest transition-colors',
                language === 'vi' ? 'text-primary' : 'text-accent/40 hover:text-accent'
              )}
            >
              VI
            </button>
          </div>

          <Link
            to="/contact"
            className="px-6 py-2 border border-primary text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300"
          >
            {t('nav.getQuote')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
           <div className="flex items-center gap-2 mr-2">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
              className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-2 py-1"
            >
              {language.toUpperCase()}
            </button>
          </div>
          <button
            className="text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-xl font-display uppercase tracking-widest',
                    location.pathname === link.path ? 'text-primary' : 'text-accent'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-primary font-bold uppercase tracking-widest"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
