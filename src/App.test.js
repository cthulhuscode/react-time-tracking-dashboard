import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./test-util";

test("Show different hours when changing frequency", () => {
  const view = renderWithProviders(<App />);
  let card;

  // Daily
  const daily = screen.getByText("Daily");
  fireEvent.click(daily);
  card = view.container.querySelectorAll(".card")[0];
  const dailyHours = card.querySelector(".card-info__hours").textContent;

  // Weekly
  const weekly = screen.getByText("Weekly");
  fireEvent.click(weekly);
  card = view.container.querySelectorAll(".card")[0];
  const weeklyHours = card.querySelector(".card-info__hours").textContent;

  // Monthly
  const monthly = screen.getByText("Monthly");
  fireEvent.click(monthly);
  card = view.container.querySelectorAll(".card")[0];
  const monthlyHours = card.querySelector(".card-info__hours").textContent;

  expect(dailyHours).not.toBe(weeklyHours);
  expect(dailyHours).not.toBe(monthlyHours);
  expect(weeklyHours).not.toBe(monthlyHours);
});
