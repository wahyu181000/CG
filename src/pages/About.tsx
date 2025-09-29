import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      emoji: '👨‍💻',
      role: t('Developer', 'Utvikler'),
      description: t('Building the future', 'Bygger fremtiden')
    },
    {
      emoji: '👨‍💻',
      role: t('Developer', 'Utvikler'),
      description: t('Making ideas reality', 'Gjør ideer til virkelighet')
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">{t('About Us', 'Om Oss')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            {t(
              "We're CyberGutta - a collaborative team of students passionate about creating innovative software solutions and learning together.",
              'Vi er CyberGutta - et samarbeidsteam av studenter som er lidenskapelige om å skape innovative programvareløsninger og lære sammen.'
            )}
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="glass-effect p-6 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50 group">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('Our Mission', 'Vårt Oppdrag')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Create tools that make a difference',
                'Lage verktøy som gjør en forskjell'
              )}
            </p>
          </Card>

          <Card className="glass-effect p-6 text-center hover:scale-105 transition-all duration-300 hover:border-secondary/50 group">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
              <Sparkles className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('Innovation', 'Innovasjon')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Always exploring new technologies',
                'Utforsker alltid ny teknologi'
              )}
            </p>
          </Card>

          <Card className="glass-effect p-6 text-center hover:scale-105 transition-all duration-300 hover:border-accent/50 group">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('Community', 'Fellesskap')}</h3>
            <p className="text-muted-foreground">
              {t(
                'Growing together as developers',
                'Vokser sammen som utviklere'
              )}
            </p>
          </Card>
        </div>

        {/* About Description */}
        <Card className="glass-effect p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t('Who We Are', 'Hvem Vi Er')}
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              {t(
                'CyberGutta serves as a hub for various projects ranging from practical utilities to experimental tech. We believe in the power of collaboration and continuous learning.',
                'CyberGutta fungerer som et nav for forskjellige prosjekter, alt fra praktiske verktøy til eksperimentell teknologi. Vi tror på kraften i samarbeid og kontinuerlig læring.'
              )}
            </p>
            <p>
              {t(
                "We're a diverse group of students with different skills and interests, united by our passion for technology and problem-solving. As we grow, we welcome more members to join our journey!",
                'Vi er en variert gruppe studenter med forskjellige ferdigheter og interesser, forent av vår lidenskap for teknologi og problemløsning. Etter hvert som vi vokser, ønsker vi flere medlemmer velkommen til å bli med på reisen vår!'
              )}
            </p>
          </div>
        </Card>

        {/* Team Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">{t('The Team', 'Teamet')}</span>
          </h2>
          <p className="text-muted-foreground">
            {t(
              'Meet the people behind CyberGutta',
              'Møt folkene bak CyberGutta'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="glass-effect p-8 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50"
            >
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="text-2xl font-semibold mb-2">{member.role}</h3>
              <p className="text-muted-foreground">{member.description}</p>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <Card className="glass-effect p-8 md:p-12 mt-16 text-center border-primary/30">
          <h2 className="text-3xl font-bold mb-4">
            {t('Join Our Journey', 'Bli Med På Reisen')}
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            {t(
              "We're always looking for passionate students to join our team and contribute to exciting projects!",
              'Vi leter alltid etter lidenskapelige studenter som vil bli med i teamet vårt og bidra til spennende prosjekter!'
            )}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
