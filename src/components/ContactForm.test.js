import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm", () => {
  render(<ContactForm />);
});

test("renders all 4 input fields", () => {
  // Arrange
  const { getByText } = render(<ContactForm />);

  // Act
  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);

  // Assert
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

test("renders click me button", () => {
  // Arrange
  const { getByTestId } = render(<ContactForm />);

  // Act
  const clickMeBtn = getByTestId("clickMeBtn");

  // Assert
  expect(clickMeBtn).toBeInTheDocument();
});

test("clicking click-me button adds numClicks by 1", () => {
  // Arrange
  const { getByTestId } = render(<ContactForm />);

  // Act
  const clickMeBtn = getByTestId("clickMeBtn");
  const clickMeCount = getByTestId("count");

  // Assert
  fireEvent.click(clickMeBtn);

  expect(clickMeCount).toHaveTextContent("1");
});
