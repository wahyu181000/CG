import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-gradient animate-pulse">404</h1>
          <h2 className="text-3xl font-bold text-foreground">
            {t('Page Not Found', 'Siden Ble Ikke Funnet')}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t(
              "Oops! The page you're looking for doesn't exist.",
              'Oops! Siden du leter etter finnes ikke.'
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link to="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              {t('Go Home', 'Gå Hjem')}
            </Button>
          </Link>
          <Button variant="outline" onClick={() => window.history.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('Go Back', 'Gå Tilbake')}
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            {t(
              'If you think this is a mistake, please contact us.',
              'Hvis du tror dette er en feil, vennligst kontakt oss.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;