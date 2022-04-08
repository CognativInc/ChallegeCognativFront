import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";
import userEvent from "@testing-library/user-event";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should have a titel with the 'Food recipes' text", () => {
      const title = /food recipes/i;

      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const findTitle = screen.getByRole("heading", { name: title });

      expect(findTitle).toBeInTheDocument();
    });
  });
});
