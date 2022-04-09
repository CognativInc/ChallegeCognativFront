import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavButton from "./NavButton";

describe("Given a NavButton component", () => {
  describe("When it's rendered on a desktop screen", () => {
    test("Then it should show a button with the text 'See More'", () => {
      const text = /see more/i;

      render(
        <BrowserRouter>
          <NavButton isMobile={false} id={""} />
        </BrowserRouter>
      );

      const findButton = screen.getByRole("button", { name: text });

      expect(findButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered on a mobile screen", () => {
    test("Then it should show an icon", () => {
      const title = /arrow/i;

      render(
        <BrowserRouter>
          <NavButton isMobile={true} id={""} />
        </BrowserRouter>
      );

      const findArrow = screen.getByRole("img", { name: title });

      expect(findArrow).toBeInTheDocument();
    });
  });
});
