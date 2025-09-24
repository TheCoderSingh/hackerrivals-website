import { useState } from 'react';
import { Book } from 'iconoir-react';
import RulesModal from '../RulesModal';

interface ViewRulesButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: React.ReactNode;
}

const ViewRulesButton = ({
  variant = 'outline',
  size = 'md',
  className = '',
  children,
}: ViewRulesButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getButtonClasses = () => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-105 rounded-lg';

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const variantClasses = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      outline: 'bg-primary/10 hover:bg-primary/20 border border-primary text-primary',
    };

    return `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={getButtonClasses()}
        aria-label="View competition rules"
      >
        <Book className="w-4 h-4" />
        {children || 'View Rules'}
      </button>

      <RulesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ViewRulesButton;
