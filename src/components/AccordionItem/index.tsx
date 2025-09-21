import { NavArrowDown, NavArrowUp } from 'iconoir-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  animationDelay?: string;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  animationDelay = '0s',
}: AccordionItemProps) => {
  return (
    <div className="border-b border-border animate-fade-in" style={{ animationDelay }}>
      <button
        onClick={onToggle}
        className="w-full font-body font-semibold text-left hover:text-primary transition-colors duration-300 text-base md:text-lg py-4 md:py-6 flex justify-between items-center group hover:cursor-pointer"
      >
        <span>{question}</span>
        {isOpen ? (
          <NavArrowUp className="w-5 h-5 transition-transform duration-300 text-primary animate-fade-in" />
        ) : (
          <NavArrowDown className="w-5 h-5 transition-transform duration-300 text-primary animate-fade-in" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="font-body text-muted-foreground leading-relaxed text-sm md:text-base pb-4 md:pb-6">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
