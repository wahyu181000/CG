import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cyberbrothershq@gmail.com',
      link: 'mailto:cyberbrothershq@gmail.com',
      description: t('Send us an email', 'Send oss en e-post')
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'github.com/CyberGutta',
      link: 'https://github.com/CyberGutta',
      description: t('Check out our repositories', 'Sjekk ut våre repositories')
    },
    {
      icon: MapPin,
      title: t('Location', 'Plassering'),
      value: 'Norway 🇳🇴',
      description: t('Based in Norway', 'Basert i Norge')
    }
  ];

  const contributionWays = [
    t('Open issues on our repositories', 'Åpne issues på våre repositories'),
    t('Submit pull requests', 'Send inn pull requests'),
    t('Reach out to team members', 'Ta kontakt med teammedlemmer'),
    t('Share your ideas with us', 'Del dine ideer med oss')
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t('Contact Us', 'Kontakt Oss')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t(
              "Have questions or want to collaborate? We'd love to hear from you!",
              'Har du spørsmål eller vil du samarbeide? Vi vil gjerne høre fra deg!'
            )}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="glass-effect p-6 hover:scale-105 transition-all duration-300 hover:border-primary/50 group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                {method.link ? (
                  <a 
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:text-primary/80 transition-colors break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-foreground">{method.value}</p>
                )}
              </Card>
            );
          })}
        </div>

        {/* Main Contact Card */}
        <Card className="glass-effect p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t('Get in Touch', 'Kom i Kontakt')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t(
                'The best way to reach us is through email or GitHub. We typically respond within 24-48 hours.',
                'Den beste måten å nå oss på er via e-post eller GitHub. Vi svarer vanligvis innen 24-48 timer.'
              )}
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <a href="mailto:cyberbrothershq@gmail.com">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                {t('Send Email', 'Send E-post')}
              </Button>
            </a>
            <a href="https://github.com/CyberGutta" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </Card>

        {/* Contribution Section */}
        <Card className="glass-effect p-8 md:p-12 border-accent/30">
          <div className="text-center mb-8">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              {t('Want to Contribute?', 'Vil Du Bidra?')}
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              {t(
                'Interested in joining or collaborating? Here\'s how:',
                'Interessert i å bli med eller samarbeide? Her er hvordan:'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contributionWays.map((way, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{way}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
