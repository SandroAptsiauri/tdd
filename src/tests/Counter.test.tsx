import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Counter from "../components/Counter";

test("renders Counter component and increments count", () => {
  render(<Counter />);
  const button = screen.getByText(/Increase/i);
  fireEvent.click(button);
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
