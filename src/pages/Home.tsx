import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Lightbulb, Users, Rocket, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t('Build Tools', 'Bygge Verktøy'),
      description: t('Creating practical applications and utilities', 'Lage praktiske applikasjoner og verktøy')
    },
    {
      icon: Lightbulb,
      title: t('Experiment', 'Eksperimentere'),
      description: t('Trying out new technologies and ideas', 'Prøve ut nye teknologier og ideer')
    },
    {
      icon: Users,
      title: t('Learn Together', 'Lære Sammen'),
      description: t('Growing as developers as a team', 'Vokse som utviklere som et team')
    },
    {
      icon: Rocket,
      title: t('Collaborate', 'Samarbeide'),
      description: t('Working on open-source projects', 'Jobbe med åpen kildekode-prosjekter')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-gradient">
                {t('Welcome to CyberGutta', 'Velkommen til CyberGutta')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              {t(
                'A group of students building cool tools and projects!',
                'En gruppe studenter som bygger kule verktøy og prosjekter!'
              )}
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
              <Link to="/about">
                <Button size="lg" className="group">
                  {t('Learn More', 'Lær Mer')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="https://github.com/CyberGutta" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">
              {t('What We Do', 'Hva Vi Gjør')}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="glass-effect p-6 hover:scale-105 transition-all duration-300 hover:border-primary/50 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">
              {t('Our Projects', 'Våre Prosjekter')}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="glass-effect p-8 hover:scale-105 transition-all duration-300 hover:border-primary/50 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                AkademiTrack
              </h3>
              <p className="text-muted-foreground mb-4">
                {t(
                  'Attendance tracking system for schools - automating the process of monitoring student attendance.',
                  'Fremmøteregistreringssystem for skoler - automatiserer prosessen med å overvåke elevfremmøte.'
                )}
              </p>
              <div className="flex items-center text-primary">
                <span className="text-sm font-semibold">{t('In Development', 'Under Utvikling')}</span>
              </div>
            </Card>

            <Card className="glass-effect p-8 hover:scale-105 transition-all duration-300 hover:border-secondary/50 group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">
                {t('More Coming Soon...', 'Mer Kommer Snart...')}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t(
                  "We're constantly working on new projects. Check our GitHub for the latest updates!",
                  'Vi jobber konstant med nye prosjekter. Sjekk vår GitHub for siste oppdateringer!'
                )}
              </p>
              <a href="https://github.com/CyberGutta" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="group/btn">
                  <Github className="mr-2 h-4 w-4" />
                  {t('View on GitHub', 'Se på GitHub')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="glass-effect p-12 max-w-3xl mx-auto text-center border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('Want to Collaborate?', 'Vil Du Samarbeide?')}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {t(
                "We're always open to new ideas and collaborations. Reach out to us!",
                'Vi er alltid åpne for nye ideer og samarbeid. Ta kontakt med oss!'
              )}
            </p>
            <Link to="/contact">
              <Button size="lg" className="group">
                {t('Get in Touch', 'Kom i Kontakt')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
