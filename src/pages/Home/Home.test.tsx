import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";

describe("Given a Home page", () => {
  describe("When it's rendered", () => {
    test("Then it should show the Recommended title and Top Selection title", () => {
      const recommended = /recommended/i;
      const topSeleciton = /top selection/i;

      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );

      const findRecommended = screen.getByRole("heading", {
        name: recommended,
      });
      const findTopSelection = screen.getByRole("heading", {
        name: topSeleciton,
      });

      expect(findRecommended).toBeInTheDocument();
      expect(findTopSelection).toBeInTheDocument();
    });
  });
});
