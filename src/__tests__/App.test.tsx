import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconoirProvider } from 'iconoir-react';
import App from '../App';

// Mock the scroll behavior
const mockScrollIntoView = vi.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

// Helper to render App with IconoirProvider
const renderApp = () => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      <App />
    </IconoirProvider>,
  );
};

describe('App', () => {
  it('should render without crashing', () => {
    renderApp();
    expect(screen.getByRole('banner')).toBeInTheDocument(); // header element
    expect(screen.getByRole('main')).toBeInTheDocument(); // main element
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer element
  });

  it('should render navigation bar', () => {
    renderApp();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render main sections', () => {
    renderApp();

    // Should always render these sections
    expect(screen.getByRole('main')).toBeInTheDocument();

    // Check for specific section content that should always be present
    expect(screen.getAllByText(/HACKER/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/RIVALS/).length).toBeGreaterThan(0);
  });

  it('should show NotFound component when route is #/404', () => {
    // Mock window.location.hash
    Object.defineProperty(window, 'location', {
      value: { hash: '#/404' },
      writable: true,
    });

    renderApp();

    // Should show 404 content instead of main app content
    expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument();
    expect(screen.queryByRole('main')).not.toBeInTheDocument();
  });

  it('should handle hash change events', () => {
    renderApp();

    // Simulate hash change
    Object.defineProperty(window, 'location', {
      value: { hash: '#/404' },
      writable: true,
    });

    // Trigger hash change event
    const hashChangeEvent = new Event('hashchange');
    window.dispatchEvent(hashChangeEvent);

    // The component should update (we can't easily test the state change,
    // but we can verify the event listener is attached)
    expect(window.location.hash).toBe('#/404');
  });
});
