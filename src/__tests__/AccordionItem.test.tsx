import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import AccordionItem from '../components/AccordionItem';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('AccordionItem', () => {
  const mockOnToggle = vi.fn();

  beforeEach(() => {
    mockOnToggle.mockClear();
  });

  it('should render question text', () => {
    renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    expect(screen.getByText('What is this?')).toBeInTheDocument();
  });

  it('should not show answer when closed', () => {
    renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    expect(screen.queryByText('This is a test answer.')).not.toBeInTheDocument();
  });

  it('should show answer when open', () => {
    renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={true}
        onToggle={mockOnToggle}
      />,
    );

    expect(screen.getByText('This is a test answer.')).toBeInTheDocument();
  });

  it('should call onToggle when clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    const button = screen.getByRole('button');
    await user.click(button);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it('should be accessible', () => {
    renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={false}
        onToggle={mockOnToggle}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('What is this?');
  });

  it('should apply animation delay', () => {
    const { container } = renderWithProvider(
      <AccordionItem
        question="What is this?"
        answer="This is a test answer."
        isOpen={false}
        onToggle={mockOnToggle}
        animationDelay="0.5s"
      />,
    );

    const accordionDiv = container.firstChild;
    expect(accordionDiv).toHaveStyle('animation-delay: 0.5s');
  });
});
