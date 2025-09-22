import { registrationContent } from '../../constants/registration';
import { isEventActive, getCurrentEventContent } from '../../constants/eventConfig';

const Register = () => {
  const eventActive = isEventActive();
  const currentEvent = getCurrentEventContent();

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

        {/* Registration Options */}
        <div className="max-w-6xl mx-auto mb-16 md:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Attendee Option */}
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

            {/* Competitor Option */}
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
          </div>

          <div className="card-gaming animate-fade-in delay-400">
            <form className="space-y-6">
              {/* Team Information */}
              <div>
                <h4 className="font-heading font-semibold text-xl text-primary mb-4 animate-glow-pulse">
                  Team Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="teamName"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Team Name *
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground"
                      placeholder="Enter your team name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="teamSize"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Team Size *
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground"
                    >
                      <option value="">Select team size</option>
                      <option value="1">1 Member (Solo)</option>
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Team Leader Information */}
              <div>
                <h4 className="font-heading font-semibold text-xl text-secondary mb-4 animate-glow-pulse">
                  Team Leader Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="leaderName"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="leaderName"
                      name="leaderName"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="leaderEmail"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="leaderEmail"
                      name="leaderEmail"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="leaderPhone"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="leaderPhone"
                      name="leaderPhone"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="experience"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Experience Level *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (2-4 years)</option>
                      <option value="advanced">Advanced (5+ years)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Technical Preferences */}
              <div>
                <h4 className="font-heading font-semibold text-xl text-accent mb-4 animate-glow-pulse">
                  Technical Preferences
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="technologies"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Preferred Technologies
                    </label>
                    <input
                      type="text"
                      id="technologies"
                      name="technologies"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground"
                      placeholder="e.g., React, Python, AWS, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="category"
                      className="font-body text-sm font-medium text-foreground"
                    >
                      Project Category Interest
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground"
                    >
                      <option value="">Select category</option>
                      <option value="ai-ml">AI/Machine Learning</option>
                      <option value="web-app">Web Applications</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="blockchain">Blockchain/Web3</option>
                      <option value="iot">IoT/Hardware</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <label
                  htmlFor="motivation"
                  className="font-body text-sm font-medium text-foreground"
                >
                  What motivates you to participate? (Optional)
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-body text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us what excites you about this hackathon..."
                />
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  className="mt-1 w-4 h-4 text-primary bg-card border-border rounded focus:ring-primary focus:ring-2"
                />
                <label htmlFor="terms" className="font-body text-sm text-muted-foreground">
                  I agree to the{' '}
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    {registrationContent.form.terms.links.terms}
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    {registrationContent.form.terms.links.privacy}
                  </a>
                  . I understand that this is an application to compete and selection is not
                  guaranteed.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-neon w-full font-body text-lg py-4 transform hover:scale-105 transition-all duration-300 animate-pulse"
                >
                  {registrationContent.form.submit.button}
                </button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  {registrationContent.form.submit.confirmationText}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
