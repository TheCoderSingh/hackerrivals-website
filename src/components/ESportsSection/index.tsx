import { Gamepad, Trophy, Flash, Eye } from 'iconoir-react';
import circuitPattern from '../../assets/circuit-pattern.jpg';

const ESportsSection = () => {
  return (
    <section className="relative overflow-hidden" id="esports">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${circuitPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />

      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent animate-pulse" />
                <Flash className="w-8 h-8 text-primary animate-bounce" />
                <div className="w-12 h-1 bg-gradient-to-l from-primary to-transparent animate-pulse" />
              </div>
              <h2 className="font-heading font-black text-5xl md:text-6xl lg:text-7xl">
                <span className="text-glow">World's First</span>
                <br />
                <span className="text-primary animate-glow-pulse">eSports Hackathon</span>
              </h2>
            </div>
            <p className="font-body text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Where <span className="text-neon font-bold">competitive gaming</span> meets{' '}
              <span className="text-secondary font-bold">innovation</span> - built for{' '}
              <span className="text-accent font-bold">spectators</span> and designed for maximum
              engagement
            </p>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-background/90 to-card/50 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <Flash className="w-12 h-12 text-primary animate-pulse" />
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-primary">
                    eSports Energy
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    High-octane competitive atmosphere with live audience, professional MC, and
                    real-time excitement.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-background/90 to-card/50 backdrop-blur-sm border border-secondary/30 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <Eye className="w-12 h-12 text-secondary animate-pulse" />
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-transparent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-secondary">
                    Spectator Friendly
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Designed for audience engagement with live voting, massive screens, and
                    interactive experiences.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-gradient-to-br from-background/90 to-card/50 backdrop-blur-sm border border-accent/30 rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <Gamepad className="w-12 h-12 text-accent animate-pulse" />
                    <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-accent">
                    Lightning Fast
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Maximum 3 hours of intense competition across three electrifying rounds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Competition Format */}
          <div className="relative mb-24">
            <div className="text-center mb-16">
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-glow mb-4">
                Competition Timeline
              </h3>
              <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
            </div>

            <div className="space-y-16">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-lg">
                    <span className="font-heading font-black text-2xl text-white">1</span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-primary mb-2">
                    Concept Presentation
                  </h4>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">
                    12:30 PM - Level 2 Stage
                  </p>
                  <p className="text-muted-foreground">
                    Teams pitch their innovative concepts to judges and live audience.
                  </p>
                </div>

                <div className="lg:w-1/3 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-lg">
                    <span className="font-heading font-black text-2xl text-white">2</span>
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-secondary mb-2">
                    MVP Knockout
                  </h4>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">
                    2:15 PM - Level 2 Stage
                  </p>
                  <p className="text-muted-foreground">
                    Intense elimination round - only 2 teams advance to the final!
                  </p>
                </div>

                <div className="lg:w-1/3 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-accent mb-2">
                    Championship Final
                  </h4>
                  <p className="text-lg font-semibold text-muted-foreground mb-3">
                    4:00 PM - Main Stage
                  </p>
                  <p className="text-muted-foreground">
                    The ultimate showdown with polished presentations and live demos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESportsSection;
