import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Xmark,
  Heart,
  Trophy,
  StarSolid,
  ThumbsUp,
  Group,
  Camera,
  Shield,
  WarningTriangle,
  XmarkCircle,
} from 'iconoir-react';
import { codeOfConductContent } from '../../constants/codeOfConduct';

const iconMap = {
  Heart,
  Trophy,
  StarSolid,
  ThumbsUp,
  Group,
  Camera,
  Shield,
  Warning: WarningTriangle,
  Gavel: XmarkCircle,
};

interface CodeOfConductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CodeOfConductModal = ({ isOpen, onClose }: CodeOfConductModalProps) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-card border border-border shadow-2xl">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-glow">
                  {codeOfConductContent.header.title}
                </h2>
                <p className="font-body text-muted-foreground mt-1">
                  {codeOfConductContent.header.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
                aria-label="Close code of conduct modal"
              >
                <Xmark className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-6 py-6">
            {/* Introduction */}
            <div className="mb-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-xl">
              <p className="font-body text-muted-foreground leading-relaxed">
                {codeOfConductContent.introduction}
              </p>
            </div>

            <div className="space-y-8">
              {codeOfConductContent.sections.map((section, index) => {
                const IconComponent = iconMap[section.icon as keyof typeof iconMap];

                return (
                  <div key={index} className="border-b border-border pb-6 last:border-b-0">
                    <h3 className="font-heading font-bold text-xl text-foreground mb-4 flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                        {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
                      </div>
                      {section.title}
                    </h3>

                    <ul className="space-y-3 ml-11">
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

            {/* Footer CTA */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-glow">
                  Join Our Community
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  By participating, you help create an inclusive and exciting environment for
                  everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => {
                      onClose();
                      const registerEl = document.getElementById('register');
                      if (registerEl) {
                        registerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="btn-neon font-body text-base py-2 px-6 inline-block transform hover:scale-105 transition-all duration-300"
                  >
                    Apply to Compete
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      const faqEl = document.getElementById('faq');
                      if (faqEl) {
                        faqEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="inline-flex items-center justify-center px-6 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary rounded-lg text-secondary font-semibold transition-all duration-300 hover:scale-105"
                  >
                    View FAQ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default CodeOfConductModal;
