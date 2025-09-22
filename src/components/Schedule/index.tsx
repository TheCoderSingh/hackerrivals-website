import { scheduleItems } from '../../constants/schedule';

const Schedule = () => {
  return (
    <section
      id="schedule"
      className="min-h-screen py-16 md:py-30 px-4 relative overflow-hidden"
      aria-label="Event schedule and timeline"
    >
      <div
        className="absolute inset-0 opacity-15 bg-schedule bg-cover"
        aria-hidden="true"
        role="img"
        aria-label="Technology circuit background pattern"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            Event Schedule
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          
          {/* Quick Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in delay-300">
            <a
              href="#register"
              className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary rounded-lg text-primary font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Attendee Tickets
            </a>
            <a
              href="https://tally.so/r/your-form-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-secondary/10 hover:bg-secondary/20 border border-secondary rounded-lg text-secondary font-semibold transition-all duration-300 hover:scale-105"
            >
              Enter Competition
            </a>
          </div>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-400">
            A packed day of coding, creativity, and competition. From start to finish, it's designed
            for maximum excitement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {scheduleItems.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`card-gaming flex items-start space-x-4 md:space-x-6 hover:scale-105 transition-all duration-500 transform relative overflow-hidden ${
                  isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`p-3 md:p-4 rounded-lg ${item.bgColor} border border-border ${item.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-sm"></div>
                  {Icon ? <Icon color={item.color} className="relative z-10" /> : null}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                    <span className="font-heading font-bold text-lg md:text-xl text-primary animate-glow-pulse">
                      {item.time}
                    </span>
                    <div className="hidden sm:block w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="font-body font-bold text-xl md:text-2xl mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center animate-bounce-in delay-800">
          <div className="inline-block px-6 md:px-8 py-4 md:py-6 bg-card/80 backdrop-blur-md border border-primary rounded-lg shadow-neon hover:scale-105 transition-all duration-300">
            <p className="font-body text-lg md:text-xl text-primary font-semibold">
              Total Duration: 5 Hours of Pure Innovation, 2hrs of Action
            </p>
            <div className="mt-2 w-full bg-muted rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-primary animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
