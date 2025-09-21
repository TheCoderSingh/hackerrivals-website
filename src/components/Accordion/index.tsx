import { useState } from 'react';
import AccordionItem from '../AccordionItem';

interface AccordionData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionData[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItem === index}
          onToggle={() => handleToggle(index)}
          animationDelay={`${(index + 5) * 0.1}s`}
        />
      ))}
    </div>
  );
};

export default Accordion;
