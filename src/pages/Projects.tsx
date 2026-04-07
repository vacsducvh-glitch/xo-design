import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS } from '../constants';
import { ArrowRight, Plus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CATEGORIES = ['All', 'Villa', 'Apartment', 'Showroom'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const { t } = useLanguage();

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <SectionHeading 
              subtitle={t('portfolio.subtitle')} 
              title={t('portfolio.title')} 
              className="mb-0"
            />
            
            {/* Filter */}
            <div className="flex flex-wrap gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 text-xs uppercase tracking-widest font-bold transition-all duration-300 border ${
                    filter === cat 
                      ? 'bg-primary border-primary text-black' 
                      : 'border-white/10 text-accent/50 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[3/4] overflow-hidden bg-secondary"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-4">{project.category}</span>
                    <h3 className="text-2xl font-display font-bold text-accent mb-4">{project.title}</h3>
                    <p className="text-accent/60 text-sm mb-8 line-clamp-2">{project.description}</p>
                    <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black hover:scale-110 transition-transform">
                      <Plus size={24} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">{t('cta.title')}</h2>
          <p className="text-accent/50 mb-10">{t('cta.description')}</p>
          <button className="px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all">
            {t('cta.button')}
          </button>
        </div>
      </section>
    </motion.div>
  );
}
