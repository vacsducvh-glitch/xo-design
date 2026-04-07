import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

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
            subtitle={t('contact.subtitle')} 
            title={t('contact.title')} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <p className="text-accent/60 text-lg leading-relaxed max-w-md">
                {t('contact.description')}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-white/5 shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">{t('contact.studio')}</h4>
                    <p className="text-accent/70">123 Design Avenue, Suite 500<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-white/5 shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">{t('contact.call')}</h4>
                    <p className="text-accent/70">+1 (212) 555-0198</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center border border-white/5 shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">{t('contact.email')}</h4>
                    <p className="text-accent/70">hello@luxedesign.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-secondary/50 border border-white/5 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                  alt="Map Location" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-black px-6 py-2 text-[10px] uppercase tracking-widest font-bold">{t('contact.map')}</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-secondary/20 p-8 md:p-12 border border-white/5">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <CheckCircle size={64} className="text-primary mb-6" />
                  <h3 className="text-3xl font-display font-bold mb-4">{t('contact.form.success')}</h3>
                  <p className="text-accent/60 mb-8">{t('contact.form.successDesc')}</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1"
                  >
                    {t('contact.form.another')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40">{t('contact.form.name')}</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40">{t('contact.form.email')}</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-accent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40">{t('contact.form.phone')}</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40">{t('contact.form.subject')}</label>
                      <select 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-accent appearance-none"
                      >
                        <option value="">{t('contact.form.select')}</option>
                        <option value="interior">Interior Design</option>
                        <option value="turnkey">Turnkey Execution</option>
                        <option value="consult">Consultation</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-accent/40">{t('contact.form.message')}</label>
                    <textarea 
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-accent resize-none"
                    />
                  </div>
                  
                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full py-5 bg-primary text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? t('contact.form.sending') : (
                      <> {t('contact.form.send')} <Send size={18} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
