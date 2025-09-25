import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window APIs that aren't available in jsdom
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(window, 'location', {
  value: {
    hash: '',
    href: 'http://localhost:3000',
    pathname: '/',
    search: '',
  },
  writable: true,
});

// Mock scroll behavior
Element.prototype.scrollIntoView = vi.fn();
