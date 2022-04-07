import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { generateRandomRecipe } from "../../mocks/recipesFactory";
import RecipeCard from "./RecipeCard";

describe("Given a RecipeCard component", () => {
  describe("When it's rendered with a recipe", () => {
    test("Then it should show a header with the recipe name and font-weight bold", () => {
      const recipe = generateRandomRecipe();

      render(
        <BrowserRouter>
          <RecipeCard recipe={recipe} />
        </BrowserRouter>
      );

      const findName = screen.queryByRole("heading", { name: recipe.name });

      expect(findName).toBeInTheDocument();
      expect(findName).toHaveStyle("font-weight: bold");
    });
  });
});
