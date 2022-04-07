import { Recipe } from "../../Interfaces/RecipeInterface";
import RecipeCard from "../RecipeCard/RecipeCard";

interface RecipesCardsListProps {
  recipesList: Recipe[];
}

const RecipesCardsList = ({
  recipesList,
}: RecipesCardsListProps): JSX.Element => {
  return (
    <>
      {recipesList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe._id} />
      ))}
    </>
  );
};

export default RecipesCardsList;
