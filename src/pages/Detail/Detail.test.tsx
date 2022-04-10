import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Detail from "./Detail";

jest.mock("../../data/fakeRecipes");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "52944" }),
}));

describe("Given a Detail page", () => {
  describe("When it's rendered with a 52944 id", () => {
    test("Then it should render the recipe with the 52944 id", () => {
      const expectedRecipe = {
        _id: "52944",
        name: "MOCK Escovitch Fish",
        categoryId: "1",
        categoryName: "Fish",
        duration: 11,
        complexity: "Hard",
        people: 3,
        recommended: 1,
        ingredients: "2 eggs\r\n4 tomatoes\r\nsalt\r\npepper",
        description:
          "Rinse fish; rub with lemon or lime, seasoned with salt and pepper or use your favorite seasoning. I used creole seasoning. Set aside or place in the oven to keep it warm until sauce is ready.\r\n\r\nIn large skillet heat oil over medium heat, until hot, add the fish, cook each side- for about 5-7 minutes until cooked through and crispy on both sides. Remove fish and set aside. Drain oil and leave about 2-3 tablespoons of oil\r\nAdd, bay leave, garlic and ginger, stir-fry for about a minute making sure the garlic does not burn\r\nThen add onion, bell peppers, thyme, scotch bonnet, sugar, all spice-continue stirring for about 2-3 minutes. Add vinegar, mix an adjust salt and pepper according to preference. Let it simmer for about 2 more minutes. \r\n\r\nDiscard bay leave, thyme spring and serve over fish with a side of this bammy. You may make the sauce about 2 days in advance.",
        photo: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      };

      render(
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      );

      const findName = screen.getByText(expectedRecipe.name);
      const findCategory = screen.getByText(expectedRecipe.categoryName);
      const findDuration = screen.getByText(
        `${expectedRecipe.duration} minutes`
      );
      const findComplexity = screen.getByText(expectedRecipe.complexity);
      const findPhoto = screen.getByRole("img");

      expect(findName).toBeInTheDocument();
      expect(findCategory).toBeInTheDocument();
      expect(findDuration).toBeInTheDocument();
      expect(findComplexity).toBeInTheDocument();
      expect(findPhoto).toBeInTheDocument();
    });
  });
});
