import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavButton from "./NavButton";

describe("Given a NavButton component", () => {
  describe("When it's rendered in desktop screen", () => {
    test("Then it should show a button with the text 'See More'", () => {
      const text = /see more/i;

      render(
        <BrowserRouter>
          <NavButton isMobile={false} />
        </BrowserRouter>
      );

      const findButton = screen.getByRole("button", { name: text });

      expect(findButton).toBeInTheDocument();
    });
  });
});
