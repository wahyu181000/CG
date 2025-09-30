import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Users, Target, Sparkles, X, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: 'Andreas Nilsen',
      image: 'andreas.jpg',
      role: t('Developer & Cybersecurity Student', 'Utvikler & Cybersikkerhetsstudent'),
      description: t('Cybersecurity focused developer', 'Cybersikkerhet-fokusert utvikler'),
      github: 'https://github.com/CyberNilsen',
      bio: {
        en: 'A focused developer with a passion for building fundamentally secure software. Specializes in C#, Python, and PHP with a strong focus on penetration testing and vulnerability assessment.',
        no: 'En fokusert utvikler med lidenskap for å bygge grunnleggende sikker programvare. Spesialiserer seg i C#, Python og PHP med sterkt fokus på penetrasjonstesting og sårbarhetsanalyse.'
      },
      skills: ['C#', 'Python', 'PHP', 'Penetration Testing', 'Security']
    },
    {
      name: 'Mathias',
      image: 'mathias.png',
      role: t('Developer & Cybersecurity Student', 'Utvikler & Cybersikkerhetsstudent'),
      description: t('Cybersecurity focused developer', 'Cybersikkerhet-fokusert utvikler'),
      github: 'https://github.com/CyberHansen',
      bio: {
        en: 'IT student with a passion for cybersecurity and development. Experienced in HTML, CSS, JavaScript, Python, and SQL, currently developing secure and efficient applications in C# and Python.',
        no: 'IT-student med lidenskap for cybersikkerhet og utvikling. Erfaring med HTML, CSS, JavaScript, Python og SQL, jobber nå med å utvikle sikre og effektive applikasjoner i C# og Python.'
      },
      skills: ['HTML/CSS', 'JavaScript', 'Python', 'SQL', 'C#']
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
              className="glass-effect p-8 text-center hover:scale-105 transition-all duration-300 hover:border-primary/50 group cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
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

      {/* Team Member Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div 
            className="bg-background border rounded-3xl max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between p-6 border-b">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={selectedMember.image} 
                    alt={selectedMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">{selectedMember.name}</h2>
                  <p className="text-primary font-medium">{selectedMember.role}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{t('About', 'Om')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(selectedMember.bio.en, selectedMember.bio.no)}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{t('Skills', 'Ferdigheter')}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={selectedMember.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    {t('View GitHub Profile', 'Se GitHub-profil')}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;