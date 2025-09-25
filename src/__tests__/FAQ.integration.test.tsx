import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import FAQ from '../components/FAQ';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('FAQ Integration', () => {
  it('should render FAQ section with title and questions', () => {
    renderWithProvider(<FAQ />);

    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(
      screen.getByText('What makes this different from a traditional hackathon?'),
    ).toBeInTheDocument();
    expect(screen.getByText('How does the eSports competition format work?')).toBeInTheDocument();
  });

  it('should show/hide answers when questions are clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    // Initially, answers should not be visible (they exist in DOM but are hidden)
    const answerElement = screen.getByText(
      /Hacker Rivals is the world's first eSports style hackathon/,
    );
    expect(answerElement).toBeInTheDocument();
    expect(answerElement.closest('[class*="max-h-0"]')).toBeInTheDocument();

    // Click on first question
    const firstQuestion = screen.getByText(
      'What makes this different from a traditional hackathon?',
    );
    await user.click(firstQuestion);

    // Answer should now be visible
    expect(answerElement.closest('[class*="max-h-96"]')).toBeInTheDocument();

    // Click again to close
    await user.click(firstQuestion);

    // Answer should be hidden again
    expect(answerElement.closest('[class*="max-h-0"]')).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    renderWithProvider(<FAQ />);

    expect(screen.getByText('View Competition Rules')).toBeInTheDocument();
    expect(screen.getByText('View Code of Conduct')).toBeInTheDocument();
  });

  it('should open rules modal when View Competition Rules is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    // Find and click the View Competition Rules button
    const rulesButton = screen.getByText('View Competition Rules');
    await user.click(rulesButton);

    // Rules modal should be open - check for the full modal title
    expect(screen.getByText('Competition Rules & Guidelines')).toBeInTheDocument();
  });

  it('should open code of conduct modal when View Code of Conduct is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    // Find and click the View Code of Conduct button
    const codeOfConductButton = screen.getByText('View Code of Conduct');
    await user.click(codeOfConductButton);

    // Code of conduct modal should be open - use more specific selector
    expect(screen.getByText('Hacker Rivals Code of Conduct')).toBeInTheDocument();
  });

  it('should handle multiple accordion interactions correctly', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    const firstQuestion = screen.getByText(
      'What makes this different from a traditional hackathon?',
    );
    const secondQuestion = screen.getByText('How does the eSports competition format work?');

    // Open first question
    await user.click(firstQuestion);
    const firstAnswer = screen.getByText(
      /Hacker Rivals is the world's first eSports style hackathon/,
    );
    expect(firstAnswer.closest('[class*="max-h-96"]')).toBeInTheDocument();

    // Open second question (should close first)
    await user.click(secondQuestion);
    expect(
      screen.getByText(/Our lightning-fast format has three electrifying rounds/),
    ).toBeInTheDocument();

    // First question should be closed again
    expect(firstAnswer.closest('[class*="max-h-0"]')).toBeInTheDocument();
  });

  it('should be accessible', () => {
    renderWithProvider(<FAQ />);

    // Should have proper headings
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);

    // Should have clickable buttons for accordion
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Should have section with id="faq"
    const faqSection = document.getElementById('faq');
    expect(faqSection).toBeInTheDocument();

    // Should have background decorative elements
    const backgroundElements = document.querySelectorAll('[class*="animate-pulse"]');
    expect(backgroundElements.length).toBeGreaterThan(0);
  });
});
