import { render, screen } from '@testing-library/react';
import Greeting from '../components/Greeting';




test('renders Greeting component with a name', () => {
  render(<Greeting name={"John"} />);
  expect(screen.getByText(/Hello, John!/i)).toBeInTheDocument();
});

test('renders Greeting component with default text', () => {
  render(<Greeting />);
  expect(screen.getByText(/Hello, Guest!/i)).toBeInTheDocument();
});
