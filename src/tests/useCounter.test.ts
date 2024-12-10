import { render, screen, fireEvent } from '@testing-library/react';
import TestComponent from '../components/TestComponent';

test('useCounter increments count', () => {
  render(<TestComponent />);

  const countElement = screen.getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();

  const button = screen.getByText(/Increment/i);
  fireEvent.click(button);

  const updatedCountElement = screen.getByText(/Count: 1/i);
  expect(updatedCountElement).toBeInTheDocument();
});
