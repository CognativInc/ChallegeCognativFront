import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { generateRandomRecipes } from "../../mocks/recipesFactory";
import RecipesCardsList from "./RecipesCardsList";

describe("Given a RecipesCardsList component", () => {
  describe("When it's rendered with a three recipes list", () => {
    test("Then it should render three images, names, categories, duration, complexity and number of people", () => {
      const recipesList = generateRandomRecipes(3);
      const firstRecipe = recipesList[0];
      const thirdRecipe = recipesList[2];

      render(
        <BrowserRouter>
          <RecipesCardsList recipesList={recipesList} />
        </BrowserRouter>
      );

      const findName0 = screen.queryByRole("heading", {
        name: recipesList[0].name,
      });
      const findCategory0 = screen.getByText(firstRecipe.categoryName);
      const findTime0 = screen.getByText(`${firstRecipe.duration} minutes`);
      const findComplexity0 = screen.getByText(firstRecipe.complexity);
      const findPeople0 = screen.getByText(`${firstRecipe.people} people`);
      const findImg0 = screen.getByAltText(firstRecipe.name);

      expect(findName0).toBeInTheDocument();
      expect(findCategory0).toBeInTheDocument();
      expect(findTime0).toBeInTheDocument();
      expect(findComplexity0).toBeInTheDocument();
      expect(findPeople0).toBeInTheDocument();
      expect(findImg0).toHaveProperty("src", firstRecipe.photo);

      const findName2 = screen.queryByRole("heading", {
        name: recipesList[0].name,
      });
      const findCategory2 = screen.getByText(thirdRecipe.categoryName);
      const findTime2 = screen.getByText(`${thirdRecipe.duration} minutes`);
      const findComplexity2 = screen.getByText(thirdRecipe.complexity);
      const findPeople2 = screen.getByText(`${thirdRecipe.people} people`);
      const findImg2 = screen.getByAltText(thirdRecipe.name);

      expect(findName2).toBeInTheDocument();
      expect(findCategory2).toBeInTheDocument();
      expect(findTime2).toBeInTheDocument();
      expect(findComplexity2).toBeInTheDocument();
      expect(findPeople2).toBeInTheDocument();
      expect(findImg2).toHaveProperty("src", firstRecipe.photo);
    });
  });
});
