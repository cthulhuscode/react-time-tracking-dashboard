import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { images } from "../../../constants";

test("Component renders properties correctly", () => {
  const hour = {
    category: "Work",
    hours: "24",
    lastWeek: "67",
    color: "orange",
    icon: "work",
  };

  const view = render(<Card hour={hour} />);

  // Throws an error when doesn't find it
  const component = screen.getByText("Work");

  // The same as the above line
  expect(view.container).toHaveTextContent("Work");
  expect(view.container).toHaveTextContent("24");
  expect(view.container).toHaveTextContent("67");

  const cardContainer = view.container.querySelector(".card");
  expect(cardContainer).toHaveStyle("background-color: orange;");

  // Test image
  const img = screen.getByAltText(hour.category);
  expect(img).toHaveAttribute("src", images[hour.icon]);

  // Use prettyDOM to print the component more friendly
  // const h3 = view.container.querySelector("h3");
  // console.log(prettyDOM(h3));
});
