import { Link } from 'react-router-dom';
import { Diamond, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Diamond className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold tracking-widest">X+O</span>
            </Link>
            <p className="text-accent/50 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-display font-semibold uppercase tracking-widest mb-6">{t('footer.explore')}</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-accent/60 hover:text-primary transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/projects" className="text-accent/60 hover:text-primary transition-colors text-sm">{t('nav.projects')}</Link></li>
              <li><Link to="/services" className="text-accent/60 hover:text-primary transition-colors text-sm">{t('nav.services')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-primary font-display font-semibold uppercase tracking-widest mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-accent/60 text-sm">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>123 Design Avenue, Suite 500<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-accent/60 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (212) 555-0198</span>
              </li>
              <li className="flex items-center gap-3 text-accent/60 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@luxedesign.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-primary font-display font-semibold uppercase tracking-widest mb-6">{t('footer.newsletter')}</h4>
            <p className="text-accent/50 text-sm mb-4">{t('footer.newsletterDesc')}</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-black/30 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
                {t('footer.join')}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-accent/30 uppercase tracking-widest">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
