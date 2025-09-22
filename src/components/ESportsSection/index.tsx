import { Flash } from 'iconoir-react';
import circuitPattern from '../../assets/circuit-pattern.jpg';
import { eSportsContent } from '../../constants/esports';
import { isEventActive } from '../../constants/eventConfig';

const ESportsSection = () => {
  const eventActive = isEventActive();

  return (
    <section
      className="relative overflow-hidden"
      id="esports"
      aria-label="eSports hackathon features and competition format"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${circuitPattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
        role="img"
        aria-label="Circuit board pattern background for technology theme"
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
                <span className="text-glow">{eSportsContent.header.title.main}</span>
                <br />
                <span className="text-primary animate-glow-pulse">
                  {eSportsContent.header.title.highlight}
                </span>
              </h2>
            </div>
            <p className="font-body text-2xl md:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              {eSportsContent.header.description.dynamic.prefix}{' '}
              <span className="text-neon font-bold">
                {eSportsContent.header.highlights.rivalry}
              </span>{' '}
              {eSportsContent.header.description.dynamic.middle}{' '}
              <span className="text-secondary font-bold">
                {eSportsContent.header.highlights.innovation}
              </span>{' '}
              {eSportsContent.header.description.dynamic.suffix}
            </p>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {eSportsContent.features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="relative group">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.colors.background} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                    />
                    <div
                      className={`relative bg-gradient-to-br from-background/90 to-card/50 backdrop-blur-sm border ${feature.colors.border} rounded-3xl p-8 h-full transform group-hover:scale-105 transition-all duration-300`}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <IconComponent
                          className={`w-12 h-12 ${feature.colors.text} animate-pulse`}
                        />
                        <div className={`w-24 h-1 bg-gradient-to-r ${feature.colors.gradient}`} />
                      </div>
                      <h3 className={`font-heading font-bold text-2xl mb-4 ${feature.colors.text}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Competition Format - Only show when event is active */}
          {eventActive && (
            <div className="relative mb-24">
              <div className="text-center mb-16">
                <h3 className="font-heading font-bold text-4xl md:text-5xl text-glow mb-4">
                  {eSportsContent.timeline.title}
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
              </div>

              <div className="space-y-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {eSportsContent.timeline.rounds.map((round, index) => (
                    <div key={index} className="lg:w-1/3 text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${round.colors.background} rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-background shadow-lg`}
                      >
                        {round.icon ? (
                          <round.icon className="w-10 h-10 text-white" />
                        ) : (
                          <span className="font-heading font-black text-2xl text-white">
                            {round.number}
                          </span>
                        )}
                      </div>
                      <h4 className={`font-heading font-bold text-2xl ${round.colors.text} mb-2`}>
                        {round.title}
                      </h4>
                      <p className="text-lg font-semibold text-muted-foreground mb-3">
                        {round.time}
                      </p>
                      <p className="text-muted-foreground">{round.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ESportsSection;
