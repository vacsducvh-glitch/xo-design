import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle={t('services.subtitle')} 
            title={t('services.title')} 
          />
          
          <div className="grid grid-cols-1 gap-24 mt-24">
            {SERVICES.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                >
                  <div className="flex-1 w-full">
                    <div className="aspect-video overflow-hidden relative group">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1618221195710-dd6b41faaea6' : index === 1 ? '1581094794329-c8112a89af12' : '1553142230-46c7201f8514'}?auto=format&fit=crop&q=80&w=1000`} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-8">
                    <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <h3 className="text-4xl font-display font-bold text-accent">{service.title}</h3>
                    <p className="text-accent/60 text-lg leading-relaxed">{service.description}</p>
                    <ul className="space-y-4">
                      {t('services.features').map((item: string) => (
                        <li key={item} className="flex items-center gap-3 text-accent/80">
                          <CheckCircle2 size={18} className="text-primary" />
                          <span className="text-sm uppercase tracking-widest font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="px-8 py-3 border border-primary text-primary text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-black transition-all">
                      {t('services.inquire')}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle={t('services.methodSubtitle')} 
            title={t('services.methodTitle')} 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {t('services.steps').map((item: any) => (
              <div key={item.step} className="relative p-8 bg-background border border-white/5 group hover:border-primary/30 transition-all">
                <span className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4 group-hover:text-primary/10 transition-colors">{item.step}</span>
                <h4 className="text-xl font-display font-bold text-primary mb-4 uppercase tracking-widest">{item.title}</h4>
                <p className="text-accent/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
