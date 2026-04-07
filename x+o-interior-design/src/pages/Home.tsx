import { motion } from 'motion/react';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { PROJECTS, SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary text-xs md:text-sm uppercase tracking-[0.5em] font-bold mb-6 block"
          >
            {t('hero.subtitle')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-5xl md:text-8xl font-display font-bold text-accent leading-tight mb-8"
          >
            {t('hero.title').split('Redefined')[0]} <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white/50">Redefined</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/projects" className="px-10 py-4 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center gap-3 group">
              {t('hero.viewProjects')} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-white/20 text-accent font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
              {t('hero.contactUs')}
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-accent/50">{t('hero.scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading 
              subtitle={t('intro.subtitle')} 
              title={t('intro.title')} 
            />
            <p className="text-accent/60 text-lg leading-relaxed mb-8">
              {t('intro.description')}
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-3xl font-display font-bold text-primary mb-2">15+</h3>
                <p className="text-xs uppercase tracking-widest text-accent/40">{t('intro.years')}</p>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold text-primary mb-2">300+</h3>
                <p className="text-xs uppercase tracking-widest text-accent/40">{t('intro.projects')}</p>
              </div>
            </div>
            <Link to="/about" className="text-primary font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              {t('intro.learnMore')} <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
                alt="Design Process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary p-8 hidden md:block border border-white/5">
              <Quote className="text-primary mb-4" size={32} />
              <p className="text-sm italic text-accent/70 leading-relaxed">
                "Design is not just what it looks like and feels like. Design is how it works."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading 
              subtitle={t('portfolio.subtitle')} 
              title={t('portfolio.title')} 
              className="mb-0"
            />
            <Link to="/projects" className="px-8 py-3 border border-white/10 hover:border-primary hover:text-primary transition-all text-xs uppercase tracking-widest font-bold">
              {t('portfolio.viewAll')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-primary text-[10px] uppercase tracking-widest font-bold mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-display font-bold text-accent mb-4">{project.title}</h3>
                  <Link to={`/projects`} className="text-white text-xs uppercase tracking-widest font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t('portfolio.explore')} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle={t('expertise.subtitle')} 
            title={t('expertise.title')} 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-10 bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                    <IconComponent className="text-primary group-hover:text-black transition-colors duration-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-accent mb-4">{service.title}</h3>
                  <p className="text-accent/50 leading-relaxed mb-6">{service.description}</p>
                  <Link to="/services" className="text-xs uppercase tracking-widest font-bold text-primary flex items-center gap-2">
                    {t('expertise.details')} <ArrowRight size={14} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading 
            subtitle={t('testimonials.subtitle')} 
            title={t('testimonials.title')} 
            align="center"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl font-display italic text-accent/80 leading-relaxed mb-10">
              {t('testimonials.quote')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Client" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-accent">James Sterling</h4>
                <p className="text-xs uppercase tracking-widest text-accent/40">CEO, Sterling Group</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-black mb-6">{t('cta.title')}</h2>
            <p className="text-black/70 text-lg">{t('cta.description')}</p>
          </div>
          <Link to="/contact" className="px-12 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-secondary transition-all duration-300 shadow-2xl">
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
