# Test Suite Documentation

## Overview

This project uses **Vitest** as the testing framework with **React Testing Library** for component testing. The test suite follows modern testing best practices and provides comprehensive coverage for the Hacker Rivals website.

## Test Structure

```
src/
├── __tests__/          # Main test files
│   ├── App.test.tsx                    # Main App component
│   ├── Accordion.test.tsx              # Accordion component behavior
│   ├── AccordionItem.test.tsx          # Individual accordion items
│   ├── Countdown.test.tsx              # Countdown timer functionality
│   ├── eventConfig.test.ts             # Event configuration utilities
│   ├── FAQ.integration.test.tsx        # FAQ section integration
│   ├── Navbar.test.tsx                 # Navigation component
│   ├── NotFound.test.tsx               # 404 page component
│   ├── RulesModal.test.tsx             # Rules modal functionality
│   └── ViewRulesButton.test.tsx        # Button component
├── test/               # Test utilities and setup
│   ├── setup.ts        # Global test configuration
│   └── utils.tsx       # Test helper utilities
└── vitest.config.ts    # Vitest configuration
```

## Testing Framework & Tools

- **Vitest**: Fast unit test framework (Vite-native)
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Additional DOM matchers
- **@testing-library/user-event**: User interaction simulation
- **jsdom**: DOM environment for testing

## Test Categories

### 1. Unit Tests

- **Components**: Individual component behavior and rendering
- **Utilities**: Helper functions and configuration logic
- **Event Config**: Event state management utilities

### 2. Integration Tests

- **FAQ Integration**: Full FAQ section with accordion behavior
- **Modal Interactions**: Modal opening/closing workflows
- **Navigation**: Menu filtering based on event state

### 3. Accessibility Tests

- ARIA attributes and roles
- Keyboard navigation
- Screen reader compatibility

## Key Test Patterns

### Component Testing

```tsx
// Standard component test structure
describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    render(<ComponentName />);

    await user.click(screen.getByRole('button'));
    expect(mockFunction).toHaveBeenCalled();
  });
});
```

### Event Configuration Testing

```tsx
// Testing dynamic content based on event state
it('should show different content based on event state', () => {
  const content = getCurrentEventContent();
  expect(content).toHaveProperty('registration');
  expect(content.registration.isOpen).toBe(isEventActive());
});
```

### Modal Testing

```tsx
// Testing modal behavior
it('should open and close modal correctly', async () => {
  const user = userEvent.setup();
  render(<ComponentWithModal />);

  // Open modal
  await user.click(screen.getByText('Open Modal'));
  expect(screen.getByText('Modal Content')).toBeInTheDocument();

  // Close modal
  await user.click(screen.getByLabelText('Close modal'));
  expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
});
```

## Mocking Strategies

### Browser APIs

```tsx
// Mock scrollIntoView and other browser APIs
Element.prototype.scrollIntoView = vi.fn();
window.scrollTo = vi.fn();
```

### Module Mocking

```tsx
// Mock external constants and configurations
vi.mock('../constants/eventConfig', () => ({
  isEventActive: vi.fn(),
  getCurrentEventContent: vi.fn(),
}));
```

### Component Providers

```tsx
// Consistent provider wrapping
const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <IconoirProvider iconProps={{ width: '2em', height: '2em' }}>{component}</IconoirProvider>,
  );
};
```

## Running Tests

### Available Commands

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage (when configured)
npm run test:coverage
```

### Test Output

- ✅ **Passing tests**: Clear success indicators
- ❌ **Failing tests**: Detailed error messages with DOM output
- 📊 **Coverage reports**: Code coverage metrics
- 🔍 **Interactive UI**: Visual test runner interface

## Test Configuration

### Vitest Config (`vitest.config.ts`)

```tsx
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Global test functions
    environment: 'jsdom', // DOM simulation
    setupFiles: './src/test/setup.ts',
    css: true, // Process CSS imports
  },
});
```

### Setup File (`src/test/setup.ts`)

- Imports `@testing-library/jest-dom` matchers
- Mocks browser APIs not available in jsdom
- Configures global test utilities

## Best Practices Implemented

### ✅ Accessibility Testing

- Tests for proper ARIA attributes
- Keyboard navigation verification
- Screen reader compatibility checks

### ✅ User-Centric Testing

- Tests focus on user behavior, not implementation
- Uses semantic queries (getByRole, getByLabelText)
- Simulates real user interactions

### ✅ Isolation & Reliability

- Each test is independent
- Proper cleanup between tests
- Consistent mocking strategies

### ✅ Error Handling

- Tests for edge cases and error states
- Proper handling of loading states
- Graceful degradation testing

### ✅ Responsive Behavior

- Tests work across different viewport sizes
- Mobile-specific functionality testing
- Responsive component behavior

## Coverage Areas

### Components Covered

- ✅ App (main application)
- ✅ Accordion & AccordionItem
- ✅ Countdown timer
- ✅ FAQ section
- ✅ Navigation bar
- ✅ NotFound page
- ✅ Modal components (Rules, Code of Conduct)
- ✅ Button components

### Utilities Covered

- ✅ Event configuration logic
- ✅ Content switching based on event state
- ✅ Helper functions

### Integration Scenarios

- ✅ Modal workflows
- ✅ Accordion interactions
- ✅ Navigation filtering
- ✅ Event state changes

## Maintenance

### Adding New Tests

1. Create test file in `src/__tests__/`
2. Follow established naming conventions
3. Use existing test patterns and utilities
4. Ensure proper cleanup and isolation

### Updating Tests

- Update tests when component behavior changes
- Keep tests focused on user-facing functionality
- Maintain accessibility test coverage
- Update mocks when external dependencies change

## Future Enhancements

### Potential Additions

- **Visual Regression Tests**: Screenshot comparisons
- **Performance Tests**: Bundle size and runtime performance
- **E2E Tests**: Full user journey testing
- **API Integration Tests**: Backend integration scenarios

### Coverage Goals

- Maintain >80% code coverage
- Focus on critical user paths
- Ensure accessibility compliance
- Test responsive behavior

This test suite provides a solid foundation for maintaining code quality and preventing regressions in the Hacker Rivals website.
