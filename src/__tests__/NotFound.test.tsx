import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import NotFound from '../components/NotFound';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

// Mock window.history and window.location
const mockBack = vi.fn();
const mockReplace = vi.fn();

Object.defineProperty(window, 'history', {
  value: {
    back: mockBack,
  },
  writable: true,
});

Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
});

describe('NotFound', () => {
  beforeEach(() => {
    mockBack.mockClear();
    mockReplace.mockClear();
    window.location.href = '';
  });

  it('should render 404 error page', () => {
    renderWithProvider(<NotFound />);

    expect(screen.getByText(/404/)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });

  it('should render navigation buttons', () => {
    renderWithProvider(<NotFound />);

    expect(screen.getByText(/Go Back/i)).toBeInTheDocument();
    expect(screen.getByText(/Go Home/i)).toBeInTheDocument();
  });

  it('should render helpful links', () => {
    renderWithProvider(<NotFound />);

    expect(screen.getByText(/Event Info/i)).toBeInTheDocument();
    expect(screen.getByText(/Schedule/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
  });

  it('should call window.history.back() when Go Back button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<NotFound />);

    const goBackButton = screen.getByText(/Go Back/i);
    await user.click(goBackButton);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('should redirect to home when Go Home button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<NotFound />);

    const goHomeButton = screen.getByText(/Go Home/i);
    await user.click(goHomeButton);

    expect(window.location.href).toBe('/');
  });

  it('should have proper link hrefs for helpful links', () => {
    renderWithProvider(<NotFound />);

    const eventInfoLink = screen.getByRole('link', { name: /Event Info/i });
    expect(eventInfoLink).toHaveAttribute('href', '/#hero');

    const scheduleLink = screen.getByRole('link', { name: /Schedule/i });
    expect(scheduleLink).toHaveAttribute('href', '/#schedule');

    const registerLink = screen.getByRole('link', { name: /Register/i });
    expect(registerLink).toHaveAttribute('href', '/#register');

    const faqLink = screen.getByRole('link', { name: /FAQ/i });
    expect(faqLink).toHaveAttribute('href', '/#faq');
  });

  it('should display appropriate error message', () => {
    renderWithProvider(<NotFound />);

    expect(
      screen.getByText(/looks like you've ventured into uncharted territory/i),
    ).toBeInTheDocument();
  });

  it('should have proper accessibility', () => {
    renderWithProvider(<NotFound />);

    // Should have buttons with proper roles
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Should have links with proper roles
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);

    // Links should have href attributes
    links.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });

  it('should render background visual elements', () => {
    const { container } = renderWithProvider(<NotFound />);

    // Should have animated background elements
    const animatedElements = container.querySelectorAll('[class*="animate-"]');
    expect(animatedElements.length).toBeGreaterThan(0);
  });
});
