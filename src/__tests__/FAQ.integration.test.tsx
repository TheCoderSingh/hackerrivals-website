import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconoirProvider } from 'iconoir-react';
import FAQ from '../components/FAQ';

// Mock the FAQ constants
vi.mock('../constants/faq', () => ({
  faqItems: [
    {
      question: 'What is Hacker Rivals?',
      answer: "Hacker Rivals is the world's first eSports-style hackathon.",
    },
    {
      question: 'When is the event?',
      answer: 'The event is scheduled for October 25, 2025.',
    },
    {
      question: 'How do I register?',
      answer: 'You can register through our website registration form.',
    },
  ],
}));

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em', color: 'white', strokeWidth: 2 }}>
      {component}
    </IconoirProvider>,
  );
};

describe('FAQ Integration', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
  });

  it('should render FAQ section with header', () => {
    renderWithProvider(<FAQ />);

    expect(screen.getByText(/frequently asked questions/i)).toBeInTheDocument();
    expect(screen.getByText(/got questions/i)).toBeInTheDocument();
  });

  it('should render all FAQ items', () => {
    renderWithProvider(<FAQ />);

    expect(screen.getByText('What is Hacker Rivals?')).toBeInTheDocument();
    expect(screen.getByText('When is the event?')).toBeInTheDocument();
    expect(screen.getByText('How do I register?')).toBeInTheDocument();
  });

  it('should show/hide answers when questions are clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    // Initially, answers should not be visible
    expect(
      screen.queryByText("Hacker Rivals is the world's first eSports-style hackathon."),
    ).not.toBeInTheDocument();

    // Click on first question
    const firstQuestion = screen.getByText('What is Hacker Rivals?');
    await user.click(firstQuestion);

    // Answer should now be visible
    expect(
      screen.getByText("Hacker Rivals is the world's first eSports-style hackathon."),
    ).toBeInTheDocument();

    // Click again to hide
    await user.click(firstQuestion);

    // Answer should be hidden again
    expect(
      screen.queryByText("Hacker Rivals is the world's first eSports-style hackathon."),
    ).not.toBeInTheDocument();
  });

  it('should render action buttons', () => {
    renderWithProvider(<FAQ />);

    expect(screen.getByText('View Competition Rules')).toBeInTheDocument();
    expect(screen.getByText('View Code of Conduct')).toBeInTheDocument();
  });

  it('should open rules modal when View Competition Rules is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    const rulesButton = screen.getByText('View Competition Rules');
    await user.click(rulesButton);

    // Rules modal should be open
    expect(screen.getByText('Competition Rules')).toBeInTheDocument();
  });

  it('should open code of conduct modal when View Code of Conduct is clicked', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    const codeOfConductButton = screen.getByText('View Code of Conduct');
    await user.click(codeOfConductButton);

    // Code of conduct modal should be open
    expect(screen.getByText(/code of conduct/i)).toBeInTheDocument();
  });

  it('should handle multiple accordion interactions correctly', async () => {
    const user = userEvent.setup();
    renderWithProvider(<FAQ />);

    const firstQuestion = screen.getByText('What is Hacker Rivals?');
    const secondQuestion = screen.getByText('When is the event?');

    // Open first question
    await user.click(firstQuestion);
    expect(
      screen.getByText("Hacker Rivals is the world's first eSports-style hackathon."),
    ).toBeInTheDocument();

    // Open second question (should close first)
    await user.click(secondQuestion);
    expect(screen.getByText('The event is scheduled for October 25, 2025.')).toBeInTheDocument();
    expect(
      screen.queryByText("Hacker Rivals is the world's first eSports-style hackathon."),
    ).not.toBeInTheDocument();
  });

  it('should be accessible', () => {
    renderWithProvider(<FAQ />);

    // Should have proper headings
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);

    // Should have clickable buttons for accordion
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);

    // Questions should be in buttons
    const questionButtons = buttons.filter(
      (button) =>
        button.textContent?.includes('What is') ||
        button.textContent?.includes('When is') ||
        button.textContent?.includes('How do'),
    );
    expect(questionButtons.length).toBe(3);
  });

  it('should have proper section structure', () => {
    renderWithProvider(<FAQ />);

    // Should have section with id="faq"
    const faqSection = document.getElementById('faq');
    expect(faqSection).toBeInTheDocument();

    // Should have background decorative elements
    const backgroundElements = document.querySelectorAll('[class*="animate-pulse"]');
    expect(backgroundElements.length).toBeGreaterThan(0);
  });
});
