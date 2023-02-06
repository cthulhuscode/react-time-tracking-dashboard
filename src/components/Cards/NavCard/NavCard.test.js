import "@testing-library/jest-dom/extend-expect";
import { fireEvent, prettyDOM } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../test-util";
import { NavCard } from "./NavCard";
import { images } from "../../../constants";

describe("<NavCard /> tests", () => {
  let view;

  beforeEach(() => {
    view = renderWithProviders(<NavCard />);
  });

  it("Should display different hour frequencies", () => {
    // See the container
    // console.log(prettyDOM(view.container));

    expect(view.container).toHaveTextContent("Daily");
    expect(view.container).toHaveTextContent("Weekly");
    expect(view.container).toHaveTextContent("Monthly");
  });

  it("Should show the profile picture", () => {
    const img = screen.getByAltText("Jeremy");
    expect(img).toHaveAttribute("src", images.jeremy);
  });

  it("Should be able to change frequency to Weekly", () => {
    const weekly = screen.getByText("Weekly");
    fireEvent.click(weekly);

    expect(weekly).toHaveClass("navcard-options__option--active");
  });

  it("Should be able to change frequency to Monthly", () => {
    const monthly = screen.getByText("Monthly");
    fireEvent.click(monthly);

    expect(monthly).toHaveClass("navcard-options__option--active");
  });

  it("Should be able to change frequency to Daily", () => {
    const daily = screen.getByText("Daily");
    fireEvent.click(daily);

    expect(daily).toHaveClass("navcard-options__option--active");
  });
});
