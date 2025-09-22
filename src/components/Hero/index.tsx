import Countdown from '../Countdown';
import { heroContent } from '../../constants/hero';

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
      aria-label="Hero section with event details and countdown"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-30 bg-hero bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
        role="img"
        aria-label="Futuristic technology background pattern"
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-dark" aria-hidden="true" />

      {/* Floating Elements */}
      <div
        className="absolute inset-0 opacity-20 animate-float bg-floating bg-cover"
        aria-hidden="true"
        role="img"
        aria-label="Floating geometric elements for visual enhancement"
      />

      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-neon-blue rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-neon-purple rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 md:w-32 h-16 md:h-32 bg-neon-green rounded-full blur-2xl animate-pulse delay-500" />
        <div className="absolute top-3/4 left-1/2 w-20 md:w-40 h-20 md:h-40 bg-neon-orange rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Main Title */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full mt-20">
        <div className="mb-0 animate-fade-in">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-glow leading-tight">
            {heroContent.title.main}
          </h1>
          <h1 className="block text-primary animate-pulse font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl text-glow leading-tight md:-mt-8">
            {heroContent.title.highlight}
          </h1>
        </div>
      </div>

      {/* Tagline */}
      <div className="mb-6 animate-fade-in delay-200">
        <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed text-center">
          {heroContent.tagline.prefix}{' '}
          <span className="text-neon font-semibold animate-pulse">
            {heroContent.tagline.highlight}
          </span>
          <br />
          {heroContent.tagline.suffix}{' '}
          <span className="text-primary font-semibold">{heroContent.tagline.emphasis}</span>
        </p>
      </div>

      {/* Event Date */}
      <div className="mb-8 animate-fade-in delay-300">
        <div className="inline-block px-4 md:px-6 py-3 md:py-4 bg-card/80 backdrop-blur-md border border-primary rounded-lg shadow-neon">
          <p className="font-body text-lg md:text-xl lg:text-2xl font-semibold text-primary">
            {heroContent.event.date}
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground text-center">
            {heroContent.event.location}
          </p>
          <p className="font-body text-xs md:text-sm text-accent text-center mt-1">
            {heroContent.event.afterParty}
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-12 animate-fade-in delay-400">
        <Countdown />
      </div>
    </section>
  );
};

export default Hero;
