import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { TEAM } from '../constants';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Header */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle={t('about.subtitle')} 
            title={t('about.title')} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
            <div className="space-y-8 text-accent/60 text-lg leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-square bg-secondary/50 flex flex-col items-center justify-center p-8 text-center border border-white/5">
                <span className="text-4xl font-display font-bold text-primary mb-2">10+</span>
                <span className="text-xs uppercase tracking-widest text-accent/40">{t('about.countries')}</span>
              </div>
              <div className="aspect-square bg-secondary/50 flex flex-col items-center justify-center p-8 text-center border border-white/5">
                <span className="text-4xl font-display font-bold text-primary mb-2">50+</span>
                <span className="text-xs uppercase tracking-widest text-accent/40">{t('about.awards')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-background border border-white/5">
            <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">{t('about.vision')}</h3>
            <p className="text-accent/60 leading-relaxed">{t('about.visionDesc')}</p>
          </div>
          <div className="p-12 bg-background border border-white/5">
            <h3 className="text-2xl font-display font-bold text-primary mb-6 uppercase tracking-widest">{t('about.mission')}</h3>
            <p className="text-accent/60 leading-relaxed">{t('about.missionDesc')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            subtitle={t('about.teamSubtitle')} 
            title={t('about.teamTitle')} 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-xl font-display font-bold text-accent mb-1">{member.name}</h4>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
