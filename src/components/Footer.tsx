import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">CyberGutta</h3>
            <p className="text-muted-foreground">
              {t(
                'Building cool tools and projects together',
                'Bygger kule verktøy og prosjekter sammen'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">
              {t('Quick Links', 'Hurtiglenker')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('Home', 'Hjem')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('About', 'Om Oss')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('Contact', 'Kontakt')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">
              {t('Get in Touch', 'Kom i Kontakt')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:cyberbrothershq@gmail.com" className="hover:text-primary transition-colors">
                  cyberbrothershq@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Github className="h-4 w-4" />
                <a href="https://github.com/CyberGutta" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  github.com/CyberGutta
                </a>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Norway 🇳🇴</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-2">
            <span>{t('Built with', 'Bygget med')}</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>{t('by students, for students', 'av studenter, for studenter')}</span>
          </p>
          <p className="text-muted-foreground mt-2">© 2025 CyberGutta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
