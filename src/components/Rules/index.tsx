import {
  Group,
  Calendar,
  Code,
  Brain,
  Copyright,
  Trophy,
  Computer,
  User,
  Clock,
  Presentation,
  Shield,
} from 'iconoir-react';
import { rulesContent } from '../../constants/rules';

const iconMap = {
  Group,
  Calendar,
  Code,
  Brain,
  Copyright,
  Trophy,
  Computer,
  User,
  Clock,
  Presentation,
  Shield,
};

const Rules = () => {
  return (
    <section id="rules" className="py-16 md:py-30 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-secondary rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-2/3 left-1/4 w-40 h-40 bg-accent rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            {rulesContent.header.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            {rulesContent.header.subtitle}
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rulesContent.sections.map((section, index) => {
            const IconComponent = iconMap[section.icon as keyof typeof iconMap];

            return (
              <div
                key={index}
                className="card-gaming animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    {section.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {section.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-body text-muted-foreground text-sm leading-relaxed">
                        {rule}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 md:p-8 animate-fade-in delay-1000">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4 text-glow">
              Ready to Compete?
            </h3>
            <p className="font-body text-lg text-muted-foreground mb-6">
              Make sure you understand and agree to all rules before applying to compete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="btn-neon font-body text-lg py-3 px-8 inline-block transform hover:scale-105 transition-all duration-300"
              >
                Apply to Compete
              </a>
              <a
                href="#faq"
                className="inline-flex items-center px-6 py-3 bg-secondary/10 hover:bg-secondary/20 border border-secondary rounded-lg text-secondary font-semibold transition-all duration-300 hover:scale-105"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
