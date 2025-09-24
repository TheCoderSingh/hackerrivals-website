import { registrationContent } from '../../constants/registration';
import { isEventActive, getCurrentEventContent } from '../../constants/eventConfig';
import { useEffect } from 'react';
import ViewRulesButton from '../ViewRulesButton';

const Register = () => {
  const eventActive = isEventActive();
  const currentEvent = getCurrentEventContent();

  // Load Tally script for form embedding
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // For inactive events, show simple coming soon message
  if (!eventActive) {
    return (
      <section id="register" className="min-h-screen py-16 md:py-30 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
              {registrationContent.header.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
              {registrationContent.header.subtitle}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-white/5 via-white/3 to-white/5 border border-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="text-center">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                  Registration Opening Soon
                </h3>
                <p className="font-body text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're working hard to bring you the next epic hackathon experience. Registration
                  details and event information will be updated on this website when available.
                </p>
                <div className="animate-bounce-in delay-1000">
                  <button
                    disabled
                    className="btn-secondary opacity-50 cursor-not-allowed font-body text-lg py-3 px-8"
                  >
                    {currentEvent.registration.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="min-h-screen py-16 md:py-30 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-32 h-32 bg-secondary rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            {registrationContent.header.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            {registrationContent.header.subtitle}
          </p>
        </div>

        {/* Competitor Option - Full Width */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-4">
                {registrationContent.options.competitor.title}
              </h3>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-6">
                {registrationContent.options.competitor.description}
              </p>
              <div className="animate-bounce-in delay-700">
                <a
                  href={registrationContent.options.competitor.link}
                  className="btn-neon font-body text-lg py-3 px-8 inline-block transform hover:scale-105 transition-all duration-300"
                >
                  {registrationContent.options.competitor.button}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground/80">
                {registrationContent.options.competitor.note}
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div id="form" className="max-w-4xl mx-auto mt-16 md:mt-20">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-glow animate-fade-in">
              {registrationContent.form.title}
            </h3>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
            <p className="font-body text-base md:text-lg text-muted-foreground animate-fade-in delay-300">
              {registrationContent.form.subtitle}
            </p>
            <div className="mt-6 animate-fade-in delay-500">
              <ViewRulesButton variant="outline" size="md">
                📋 Read Competition Rules First
              </ViewRulesButton>
            </div>
          </div>

          <div className="card-gaming animate-fade-in delay-400">
            {/* Tally Form Embed */}
            <div className="tally-form-container">
              <iframe
                data-tally-src={registrationContent.form.tallyFormUrl}
                loading="lazy"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Apply to Compete - Hacker Rivals"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Attendee Experience - Full Width */}
        <div className="max-w-6xl mx-auto mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-white/5 via-white/3 to-white/5 border border-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4">
                {registrationContent.options.attendee.title}
              </h3>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-6">
                {registrationContent.options.attendee.description}
              </p>
              <div className="animate-bounce-in delay-500">
                <a
                  href={registrationContent.options.attendee.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon font-body text-lg py-3 px-8 inline-block transform hover:scale-105 transition-all duration-300"
                >
                  {registrationContent.options.attendee.button}
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground/80">
                {registrationContent.options.attendee.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
