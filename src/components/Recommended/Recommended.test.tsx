import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { generateRandomRecipes } from "../../mocks/recipesFactory";
import Recommended from "./Recommended";

describe("Given a Recommended component", () => {
  describe("When it's rendered with a list of recommendations", () => {
    test("Then it should show the recommendations photos", () => {
      const recommendations = generateRandomRecipes(3);
      const firstRecommendation = recommendations[0];
      const secondRecommendation = recommendations[1];
      const thirdRecommendation = recommendations[2];

      render(
        <BrowserRouter>
          <Recommended recommendedList={recommendations} />
        </BrowserRouter>
      );

      const findFirstPhoto = screen.getByRole("img", {
        name: firstRecommendation.name,
      });
      const findSecondPhoto = screen.getByRole("img", {
        name: secondRecommendation.name,
      });
      const findThirdPhoto = screen.getByRole("img", {
        name: thirdRecommendation.name,
      });

      expect(findFirstPhoto).toBeInTheDocument();
      expect(findSecondPhoto).toBeInTheDocument();
      expect(findThirdPhoto).toBeInTheDocument();
    });
  });

  describe("Whent it's rendered with a list of recommendations, but the first recommendation doesn't have any photo", () => {
    test("Then it should show the photo with the url 'http://via.placeholder.com/640x360' on the first position", () => {
      const recommendations = generateRandomRecipes(3);
      const firstRecommendation = recommendations[0];
      delete firstRecommendation.photo;
      const imageURL = "http://via.placeholder.com/640x360";

      render(
        <BrowserRouter>
          <Recommended recommendedList={recommendations} />
        </BrowserRouter>
      );

      const findFirstPhoto = screen.getByRole("img", {
        name: firstRecommendation.name,
      });

      expect(findFirstPhoto).toHaveProperty("src", imageURL);
      expect(findFirstPhoto).toBeInTheDocument();
    });
  });
});
