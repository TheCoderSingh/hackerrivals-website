import React from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { IconoirProvider } from 'iconoir-react';
import { vi } from 'vitest';

// Custom render function that includes providers
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
        {children}
      </IconoirProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};

// Mock common browser APIs
export const mockBrowserAPIs = () => {
  Element.prototype.scrollIntoView = vi.fn();
  window.scrollTo = vi.fn();

  Object.defineProperty(window, 'location', {
    value: {
      href: '',
      hash: '',
      pathname: '/',
      search: '',
    },
    writable: true,
  });

  Object.defineProperty(window, 'history', {
    value: {
      back: vi.fn(),
    },
    writable: true,
  });
};

// Helper to create mock FAQ items
export const mockFAQItems = [
  {
    question: 'What is Hacker Rivals?',
    answer: "Hacker Rivals is the world's first eSports-style hackathon.",
  },
  {
    question: 'When is the event?',
    answer: 'The event is scheduled for October 25, 2025.',
  },
];

export { customRender as render };
