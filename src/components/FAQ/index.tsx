import Accordion from '../Accordion';
import { faqItems } from '../../constants/faq';
import ViewRulesButton from '../ViewRulesButton';

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-30 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-56 h-56 bg-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-glow animate-fade-in">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-4 animate-fade-in delay-200"></div>
          <p className="font-rajdhani text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-300">
            Got questions? We've got answers. Find everything you need to know about HackerRivals.
          </p>
        </div>

        <div className="card-gaming animate-slide-up delay-400">
          <Accordion items={faqItems} />
        </div>

        <div className="text-center mt-8 animate-fade-in delay-600">
          <p className="font-body text-muted-foreground mb-4">
            Need more details about competition rules and guidelines?
          </p>
          <ViewRulesButton variant="primary" size="lg">
            View Complete Rules & Guidelines
          </ViewRulesButton>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
