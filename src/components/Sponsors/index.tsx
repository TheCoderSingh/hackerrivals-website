import { sponsors } from '../../constants/sponsors';

const Sponsors = () => {
  const getTierStyle = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'border-primary text-primary shadow-neon';
      case 'Gold':
        return 'border-secondary text-secondary shadow-green';
      case 'Silver':
        return 'border-accent text-accent shadow-purple';
      default:
        return 'border-muted-foreground text-muted-foreground';
    }
  };

  const getTierSize = (tier: string) => {
    switch (tier) {
      case 'Platinum':
        return 'w-32 h-32 text-2xl';
      case 'Gold':
        return 'w-28 h-28 text-xl';
      case 'Silver':
        return 'w-24 h-24 text-lg';
      default:
        return 'w-20 h-20 text-base';
    }
  };

  return (
    <section id="sponsors" className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-primary rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            Powered by industry leaders who believe in the future of innovation and competitive
            coding.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12 md:mb-16 animate-slide-up delay-400">
          <h3 className="font-heading font-bold text-xl md:text-2xl text-center mb-8 md:mb-12 text-primary animate-glow-pulse">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center">
            {sponsors
              .filter((sponsor) => sponsor.tier === 'Platinum')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={`${getTierSize(sponsor.tier)} ${getTierStyle(
                    sponsor.tier,
                  )} bg-card border-2 rounded-lg flex items-center justify-center font-heading font-bold hover:scale-110 transition-all duration-500 cursor-pointer animate-bounce-in relative overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-sm"></div>
                  <span className="relative z-10">{sponsor.logo}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12 md:mb-16 animate-slide-up delay-500">
          <h3 className="font-heading font-bold text-lg md:text-xl text-center mb-8 text-secondary animate-glow-pulse">
            Gold Sponsors
          </h3>
          <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
            {sponsors
              .filter((sponsor) => sponsor.tier === 'Gold')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={`${getTierSize(sponsor.tier)} ${getTierStyle(
                    sponsor.tier,
                  )} bg-card border-2 rounded-lg flex items-center justify-center font-heading font-bold hover:scale-110 transition-all duration-500 cursor-pointer animate-bounce-in relative overflow-hidden`}
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-secondary opacity-20 blur-sm"></div>
                  <span className="relative z-10">{sponsor.logo}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12 md:mb-16 animate-slide-up delay-600">
          <h3 className="font-heading font-bold text-base md:text-lg text-center mb-8 text-accent animate-glow-pulse">
            Silver Sponsors
          </h3>
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap">
            {sponsors
              .filter((sponsor) => sponsor.tier === 'Silver')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={`${getTierSize(sponsor.tier)} ${getTierStyle(
                    sponsor.tier,
                  )} bg-card border-2 rounded-lg flex items-center justify-center font-heading font-bold hover:scale-110 transition-all duration-500 cursor-pointer animate-bounce-in relative overflow-hidden`}
                  style={{ animationDelay: `${(index + 3) * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-sm"></div>
                  <span className="relative z-10">{sponsor.logo}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-12 md:mb-16 animate-slide-up delay-700">
          <h3 className="font-heading font-bold text-sm md:text-base text-center mb-8 text-muted-foreground">
            Bronze Sponsors
          </h3>
          <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            {sponsors
              .filter((sponsor) => sponsor.tier === 'Bronze')
              .map((sponsor, index) => (
                <div
                  key={index}
                  className={`${getTierSize(sponsor.tier)} ${getTierStyle(
                    sponsor.tier,
                  )} bg-card border rounded-lg flex items-center justify-center font-heading font-bold hover:scale-110 transition-all duration-500 cursor-pointer animate-bounce-in`}
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  {sponsor.logo}
                </div>
              ))}
          </div>
        </div>

        {/* Call for sponsors */}
        <div className="text-center animate-fade-in delay-800">
          <div className="card-gaming max-w-3xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="font-heading font-bold text-xl md:text-2xl mb-4 text-primary animate-glow-pulse">
              Want to Sponsor?
            </h3>
            <p className="font-body text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
              Join us in supporting the next generation of developers and innovators.
            </p>
            <button className="btn-secondary-neon font-body text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 hover:cursor-pointer">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
