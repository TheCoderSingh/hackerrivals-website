import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { IconoirProvider } from 'iconoir-react';
import Countdown from '../components/Countdown';

// Mock the eventConfig
vi.mock('../constants/eventConfig', () => ({
  isEventActive: vi.fn(),
}));

// Mock heroContent
vi.mock('../constants/hero', () => ({
  heroContent: {
    countdown: {
      title: 'Coming Soon',
      message: 'The next HackerRivals event is currently being planned.',
      progressText: 'Stay tuned for updates!',
      targetDate: '2025-10-25T00:00:00',
    },
  },
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('Countdown', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset modules to ensure fresh imports
    vi.resetModules();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render countdown timer when event is active', async () => {
    // Mock the event as active
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    renderWithProvider(<Countdown />);

    // Should show countdown title
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });

  it('should show inactive event message when event is inactive', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(false);

    renderWithProvider(<Countdown />);

    // Should show the inactive event content instead of countdown
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
    expect(
      screen.getByText(/the next hackerrivals event is currently being planned/i),
    ).toBeInTheDocument();
  });

  it('should display time units when event is active', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    renderWithProvider(<Countdown />);

    // When active, it should show time units (though they might be 00)
    expect(screen.getByText('Days')).toBeInTheDocument();
    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    expect(screen.getByText('Seconds')).toBeInTheDocument();
  });

  it('should update countdown values', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    renderWithProvider(<Countdown />);

    // Should display numerical values (at least 00)
    const timeNumbers = screen.getAllByText(/^\d{2}$/);
    expect(timeNumbers.length).toBeGreaterThanOrEqual(4); // At least 4 time units
  });

  it('should show progress text', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    renderWithProvider(<Countdown />);

    // Should show progress text
    expect(screen.getByText(/stay tuned for updates/i)).toBeInTheDocument();
  });

  it('should handle countdown expiration gracefully', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    // Mock a past date
    vi.doMock('../constants/hero', () => ({
      heroContent: {
        countdown: {
          title: 'Coming Soon',
          targetDate: '2020-01-01T00:00:00', // Past date
          progressText: 'Stay tuned for updates!',
        },
      },
    }));

    renderWithProvider(<Countdown />);

    // Should still render without crashing
    expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
  });
});
