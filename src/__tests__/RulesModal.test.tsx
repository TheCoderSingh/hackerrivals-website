import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import RulesModal from '../components/RulesModal';

// Mock the rules content
vi.mock('../constants/rules', () => ({
  rulesContent: {
    header: {
      title: 'Competition Rules',
      subtitle: 'Everything you need to know',
    },
    sections: [
      {
        title: 'Team Composition',
        icon: 'Group',
        rules: ['Teams may have up to 5 members maximum', 'Each team must designate a team leader'],
      },
      {
        title: 'Project Guidelines',
        icon: 'Code',
        rules: ['Projects must be original', 'Use of external APIs is allowed'],
      },
    ],
  },
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('RulesModal', () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('should not render when isOpen is false', () => {
    renderWithProvider(<RulesModal isOpen={false} onClose={mockOnClose} />);
    expect(screen.queryByText('Competition Rules')).not.toBeInTheDocument();
  });

  it('should render when isOpen is true', () => {
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);
    expect(screen.getByText('Competition Rules')).toBeInTheDocument();
    expect(screen.getByText('Everything you need to know')).toBeInTheDocument();
  });

  it('should render all rule sections', () => {
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByText('Team Composition')).toBeInTheDocument();
    expect(screen.getByText('Project Guidelines')).toBeInTheDocument();
    expect(screen.getByText('Teams may have up to 5 members maximum')).toBeInTheDocument();
    expect(screen.getByText('Projects must be original')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    const closeButton = screen.getByLabelText('Close rules modal');
    await user.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose when backdrop is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    // Find the backdrop (the overlay behind the modal)
    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/75');
    expect(backdrop).toBeInTheDocument();

    if (backdrop) {
      await user.click(backdrop);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    }
  });

  it('should call onClose when Escape key is pressed', () => {
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should set body overflow to hidden when modal is open', () => {
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should restore body overflow when modal is closed', () => {
    const { rerender } = renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);
    expect(document.body.style.overflow).toBe('hidden');

    rerender(
      <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
        <RulesModal isOpen={false} onClose={mockOnClose} />
      </IconoirProvider>,
    );

    expect(document.body.style.overflow).toBe('unset');
  });

  it('should render call-to-action buttons', () => {
    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByText('Apply to Compete')).toBeInTheDocument();
    expect(screen.getByText('View FAQ')).toBeInTheDocument();
  });

  it('should handle scroll to register section when Apply to Compete is clicked', async () => {
    const user = userEvent.setup();
    const mockScrollIntoView = vi.fn();

    // Mock getElementById to return element with scrollIntoView
    const mockElement = { scrollIntoView: mockScrollIntoView };
    vi.spyOn(document, 'getElementById').mockReturnValue(
      mockElement as unknown as HTMLElement | null,
    );

    renderWithProvider(<RulesModal isOpen={true} onClose={mockOnClose} />);

    const applyButton = screen.getByText('Apply to Compete');
    await user.click(applyButton);

    expect(document.getElementById).toHaveBeenCalledWith('register');
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
