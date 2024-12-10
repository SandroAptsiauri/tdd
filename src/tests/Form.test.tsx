import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

test("renders Form component and handles submit", () => {
  render(<Form />);
  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button", { name: /submit/i });

  fireEvent.change(input, { target: { value: "Hello" } });
  fireEvent.click(button);

  expect(screen.getByText(/Submitted: Hello/i)).toBeInTheDocument();
});
