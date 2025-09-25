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
      targetDate: '2025-12-31T23:59:59',
      title: 'Event Starts In',
      progressText: 'Get ready for the event',
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
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it('should render countdown when event is active', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    renderWithProvider(<Countdown />);

    expect(screen.getByText('Event Starts In')).toBeInTheDocument();
  });

  it('should not render countdown when event is inactive', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(false);

    const { container } = renderWithProvider(<Countdown />);

    expect(container.firstChild).toBeNull();
  });

  it('should display time units when event is active', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    // Set a specific date for consistent testing
    vi.setSystemTime(new Date('2025-01-01T00:00:00'));

    renderWithProvider(<Countdown />);

    // Should show time units (days, hours, minutes, seconds)
    expect(screen.getByText('Event Starts In')).toBeInTheDocument();

    // The component should render time display elements
    const timeElements = screen.getAllByText(/\d+/);
    expect(timeElements.length).toBeGreaterThan(0);
  });

  it('should update countdown every second', async () => {
    const { isEventActive } = await import('../constants/eventConfig');
    vi.mocked(isEventActive).mockReturnValue(true);

    vi.setSystemTime(new Date('2025-12-30T23:59:58'));

    renderWithProvider(<Countdown />);

    // Fast-forward time by 1 second
    vi.advanceTimersByTime(1000);

    // Component should still be rendered (checking it doesn't crash)
    expect(screen.getByText('Event Starts In')).toBeInTheDocument();
  });
});
