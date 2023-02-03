import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/react";
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

  // throws an error when not find it
  const component = screen.getByText("Work");

  // The same as the above line
  expect(view.container).toHaveTextContent("Work");
  expect(view.container).toHaveTextContent("24");

  // const h3 = view.container.querySelector("h3");
  // use prettyDOM to print the component more friendly
  // console.log(prettyDOM(h3));
});
