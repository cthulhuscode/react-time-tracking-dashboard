import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

test("Component renders", () => {
  const hour = {
    category: "Work",
    hours: "24",
    lastWeek: "67",
    color: "orange",
    icon: "work",
  };

  const view = render(<Card hour={hour} />);

  const component = screen.getByText("Work");

  expect(view.container).toHaveTextContent("Work");
  expect(view.container).toHaveTextContent("24");

  view.debug();
});
