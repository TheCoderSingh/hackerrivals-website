import Countdown from '../Countdown';
import { heroContent } from '../../constants/hero';
import { isEventActive } from '../../constants/eventConfig';

const Hero = () => {
  const eventActive = isEventActive();
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
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
      <div className="mb-2 animate-fade-in delay-200">
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

      {/* Powered by AI Badge */}
      <div className="mb-4 animate-fade-in delay-250">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 backdrop-blur-md border border-primary/30 rounded-full shadow-neon group hover:shadow-purple transition-all duration-300 hover:scale-105">
          {/* AI Icon */}
          <div className="relative">
            <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                <path d="M19 15L19.74 17.74L22.5 18.5L19.74 19.26L19 22L18.26 19.26L15.5 18.5L18.26 17.74L19 15Z" />
                <path d="M5 7L5.5 8.5L7 9L5.5 9.5L5 11L4.5 9.5L3 9L4.5 8.5L5 7Z" />
              </svg>
            </div>
            <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full animate-ping opacity-20"></div>
          </div>
          {/* Text */}
          <span className="font-heading text-sm md:text-base font-bold text-glow animate-glow-pulse">
            POWERED BY AI
          </span>
          {/* Sparkle Animation */}
          <div className="relative">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-accent rounded-full animate-ping opacity-30"></div>
          </div>
        </div>
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
          <p className="font-body text-xs md:text-sm text-secondary text-center mt-1">
            {heroContent.event.afterParty}
          </p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-8 animate-fade-in delay-400">
        <Countdown />
      </div>

      {/* Registration Buttons */}
      {eventActive && (
        <div className="mb-12 animate-fade-in delay-500">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto px-4">
            <a
              href="https://awsday.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon font-body text-lg py-3 px-8 w-full sm:w-auto transform hover:scale-105 transition-all duration-300 text-center"
            >
              Attendee Ticket
            </a>
            <a
              href="#register"
              className="btn-neon font-body text-lg py-3 px-8 w-full sm:w-auto transform hover:scale-105 transition-all duration-300 text-center"
            >
              Apply to Compete
            </a>
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-3 max-w-lg mx-auto">
            Choose your experience: Purchase a ticket to attend or apply to compete for the $1000
            prize
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
