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

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-white/5 via-white/3 to-white/5 border border-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
                  {registrationContent.awsDay.title}
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground max-w-xl">
                  {registrationContent.awsDay.description}
                </p>

                <ul className="mt-4 text-xs md:text-sm text-muted-foreground space-y-2">
                  {registrationContent.awsDay.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-primary/20 text-primary rounded-full text-sm">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto text-center">
                <div className="animate-bounce-in delay-1000">
                  <button
                    type="submit"
                    className="btn-neon w-full font-body text-lg py-3 transform hover:scale-105 transition-all duration-300"
                  >
                    {registrationContent.awsDay.button}
                  </button>
                </div>

                <div className="mt-3">
                  <a
                    href={`mailto:${registrationContent.awsDay.contactEmail}`}
                    className="text-sm text-muted-foreground hover:text-white underline"
                  >
                    {registrationContent.awsDay.contact}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/80 text-center md:text-left">
              {registrationContent.awsDay.note}
            </p>
          </div>
        </div>

        {/* Registration Form Section */}
        <div className="max-w-4xl mx-auto mt-16 md:mt-20">
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
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    Privacy Policy
                  </a>
                  . I understand that this is a competitive event and all submissions will be
                  evaluated fairly.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-neon w-full font-body text-lg py-4 transform hover:scale-105 transition-all duration-300 animate-pulse"
                >
                  Complete Registration
                </button>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  You'll receive a confirmation email within 24 hours
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
