import "@testing-library/jest-dom/extend-expect";
import { prettyDOM } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test-util";
import { NavCard } from "./NavCard";

test("Change hour frequency", () => {
  renderWithProviders(<NavCard />);
});
