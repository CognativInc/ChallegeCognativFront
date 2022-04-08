import styled from "styled-components";
import { Recipe } from "../../Interfaces/RecipeInterface";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipesContainer = styled.ul`
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    gap: 20px;
  }
`;

interface RecipesCardsListProps {
  recipesList: Recipe[];
}

const RecipesCardsList = ({
  recipesList,
}: RecipesCardsListProps): JSX.Element => {
  return (
    <RecipesContainer>
      {recipesList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe._id} />
      ))}
    </RecipesContainer>
  );
};

export default RecipesCardsList;
