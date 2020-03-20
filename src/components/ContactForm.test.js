import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm", () => {
  render(<ContactForm />);
});

test("renders all 4 inputs", () => {
  const container = render(<ContactForm />);

  container.getByText(/first name/i);
  container.getByText(/last name/i);
  container.getByText(/email/i);
  container.getByText(/message/i);
})