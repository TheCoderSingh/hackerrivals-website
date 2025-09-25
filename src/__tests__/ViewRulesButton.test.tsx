import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import ViewRulesButton from '../components/ViewRulesButton';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('ViewRulesButton', () => {
  it('should render button with default props', () => {
    renderWithProvider(<ViewRulesButton>View Rules</ViewRulesButton>);

    const button = screen.getByRole('button', { name: /view rules/i });
    expect(button).toBeInTheDocument();
  });

  it('should render custom children text', () => {
    renderWithProvider(<ViewRulesButton>Custom Rules Text</ViewRulesButton>);

    expect(screen.getByText('Custom Rules Text')).toBeInTheDocument();
  });

  it('should open modal when clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<ViewRulesButton>View Rules</ViewRulesButton>);

    const button = screen.getByRole('button', { name: /view rules/i });
    await user.click(button);

    // Modal should be open (check for modal content)
    expect(screen.getByText('Competition Rules')).toBeInTheDocument();
  });

  it('should close modal when close button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<ViewRulesButton>View Rules</ViewRulesButton>);

    // Open modal
    const button = screen.getByRole('button', { name: /view rules/i });
    await user.click(button);

    // Close modal
    const closeButton = screen.getByLabelText('Close rules modal');
    await user.click(closeButton);

    // Modal should be closed
    expect(screen.queryByText('Competition Rules')).not.toBeInTheDocument();
  });

  it('should apply custom className', () => {
    renderWithProvider(<ViewRulesButton className="custom-class">View Rules</ViewRulesButton>);

    const button = screen.getByRole('button', { name: /view rules/i });
    expect(button).toHaveClass('custom-class');
  });

  it('should handle different variants', () => {
    const { rerender } = renderWithProvider(
      <ViewRulesButton variant="primary">Primary Button</ViewRulesButton>,
    );

    let button = screen.getByRole('button', { name: /primary button/i });
    expect(button).toBeInTheDocument();

    rerender(
      <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
        <ViewRulesButton variant="secondary">Secondary Button</ViewRulesButton>
      </IconoirProvider>,
    );

    button = screen.getByRole('button', { name: /secondary button/i });
    expect(button).toBeInTheDocument();
  });

  it('should handle different sizes', () => {
    const { rerender } = renderWithProvider(
      <ViewRulesButton size="sm">Small Button</ViewRulesButton>,
    );

    let button = screen.getByRole('button', { name: /small button/i });
    expect(button).toBeInTheDocument();

    rerender(
      <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
        <ViewRulesButton size="lg">Large Button</ViewRulesButton>
      </IconoirProvider>,
    );

    button = screen.getByRole('button', { name: /large button/i });
    expect(button).toBeInTheDocument();
  });
});
