import { Recipe } from "../../Interfaces/RecipeInterface";
import RecipeCard from "../RecipeCard/RecipeCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RecipesContainer } from "./styles";

interface RecipesCardsListProps {
  recipesList: Recipe[];
}

const RecipesCardsList = ({
  recipesList,
}: RecipesCardsListProps): JSX.Element => {
  return (
    <>
      <SectionTitle text="Top selection" />
      <RecipesContainer>
        {recipesList.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe._id} />
        ))}
      </RecipesContainer>
    </>
  );
};

export default RecipesCardsList;
