import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gradient">CyberGutta</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className="transition-all"
              >
                {t('Home', 'Hjem')}
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive('/about') ? 'default' : 'ghost'}
                className="transition-all"
              >
                {t('About', 'Om Oss')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isActive('/contact') ? 'default' : 'ghost'}
                className="transition-all"
              >
                {t('Contact', 'Kontakt')}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="ml-4"
            >
              <Globe className="h-4 w-4" />
            </Button>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-wrap items-center gap-2 mt-4">
          <Link to="/">
            <Button 
              variant={isActive('/') ? 'default' : 'ghost'}
              size="sm"
            >
              {t('Home', 'Hjem')}
            </Button>
          </Link>
          <Link to="/about">
            <Button 
              variant={isActive('/about') ? 'default' : 'ghost'}
              size="sm"
            >
              {t('About', 'Om Oss')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant={isActive('/contact') ? 'default' : 'ghost'}
              size="sm"
            >
              {t('Contact', 'Kontakt')}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
