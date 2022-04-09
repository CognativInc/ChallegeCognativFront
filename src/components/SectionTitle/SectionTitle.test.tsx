import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SectionTitle from "./SectionTitle";

describe("Given a SectionTitle component", () => {
  describe("When it's rendered wiht a text = 'Fake Title'", () => {
    test("Then it should render the text", () => {
      const expectedText = "Fake Title";

      render(
        <BrowserRouter>
          <SectionTitle text={expectedText} />
        </BrowserRouter>
      );

      const findTitle = screen.getByRole("heading", { name: expectedText });

      expect(findTitle).toBeInTheDocument();
    });
  });
});
