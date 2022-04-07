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

    test("Then it should show the recipe's infomation and the photo", () => {
      const recipe = generateRandomRecipe();

      render(
        <BrowserRouter>
          <RecipeCard recipe={recipe} />
        </BrowserRouter>
      );

      const findCategory = screen.getByText(recipe.categoryName);
      const findTime = screen.getByText(`${recipe.duration} minutes`);
      const findComplexity = screen.getByText(recipe.complexity);
      const findPeople = screen.getByText(`${recipe.people} people`);
      const findImg = screen.getByAltText(recipe.name);

      expect(findCategory).toBeInTheDocument();
      expect(findTime).toBeInTheDocument();
      expect(findComplexity).toBeInTheDocument();
      expect(findPeople).toBeInTheDocument();
      expect(findImg).toBeInTheDocument();
    });
  });

  describe("When the recipe doesn't have any photo on his props", () => {
    test("Then it should sohw an image", () => {
      const recipe = generateRandomRecipe();
      delete recipe.photo;

      const photoURL = "http://via.placeholder.com/640x360";

      render(
        <BrowserRouter>
          <RecipeCard recipe={recipe} />
        </BrowserRouter>
      );

      const findImg = screen.getByAltText(recipe.name);
      console.log(findImg);
      expect(findImg).toHaveProperty("src", photoURL);
    });
  });
});
