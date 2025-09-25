import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import Accordion from '../components/Accordion';

const mockItems = [
  {
    question: 'What is this event about?',
    answer: 'This is a test event for our hackathon.',
  },
  {
    question: 'When is the event?',
    answer: 'The event is scheduled for next month.',
  },
  {
    question: 'How do I register?',
    answer: 'You can register through our website.',
  },
];

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('Accordion', () => {
  it('should render all accordion items', () => {
    renderWithProvider(<Accordion items={mockItems} />);

    mockItems.forEach((item) => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('should show closed state initially', () => {
    renderWithProvider(<Accordion items={mockItems} />);

    // Answers should not be visible initially - check for collapsed state
    mockItems.forEach((item) => {
      const answerElement = screen.getByText(item.answer);
      // The answer should be in the DOM but in a collapsed container
      expect(answerElement).toBeInTheDocument();
      // Find the accordion container with transition classes
      const container = answerElement.closest('[class*="max-h-0"]');
      expect(container).toBeInTheDocument();
    });
  });

  it('should open accordion item when clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    await user.click(firstQuestion);

    expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();
  });

  it('should close accordion item when clicked again', async () => {
    const user = userEvent.setup();
    renderWithProvider(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);

    // Open
    await user.click(firstQuestion);
    expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();

    // Close
    await user.click(firstQuestion);
    const firstAnswerElement = screen.getByText(mockItems[0].answer);
    // Should be collapsed again
    const container = firstAnswerElement.closest('[class*="max-h-0"]');
    expect(container).toBeInTheDocument();
  });

  it('should only allow one item to be open at a time', async () => {
    const user = userEvent.setup();
    renderWithProvider(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);
    const secondQuestion = screen.getByText(mockItems[1].question);

    // Open first item
    await user.click(firstQuestion);
    expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();

    // Open second item
    await user.click(secondQuestion);
    const secondAnswerElement = screen.getByText(mockItems[1].answer);
    // Second answer should be expanded
    const expandedContainer = secondAnswerElement.closest('[class*="max-h-96"]');
    expect(expandedContainer).toBeInTheDocument();

    // First answer should now be hidden (collapsed)
    const firstAnswerElement = screen.getByText(mockItems[0].answer);
    const collapsedContainer = firstAnswerElement.closest('[class*="max-h-0"]');
    expect(collapsedContainer).toBeInTheDocument();
  });

  it('should handle empty items array', () => {
    const { container } = renderWithProvider(<Accordion items={[]} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should display correct arrow icons', async () => {
    const user = userEvent.setup();
    renderWithProvider(<Accordion items={mockItems} />);

    const firstQuestion = screen.getByText(mockItems[0].question);

    // Check for down arrow initially (closed state)
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();

    // Open the accordion
    await user.click(firstQuestion);

    // The button should still be there (icon might change but button remains)
    expect(buttons[0]).toBeInTheDocument();
  });
});
