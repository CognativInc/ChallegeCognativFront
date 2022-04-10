import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

jest.mock("./data/fakeRecipes");

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render all the recipes", () => {
      const expectedNumberOfRecipes = 3;

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const recipes = screen.getAllByRole("listitem", { name: "recipe" });

      expect(recipes).toHaveLength(expectedNumberOfRecipes);
    });
  });
});
