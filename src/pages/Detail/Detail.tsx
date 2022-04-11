import { useParams } from "react-router-dom";
import fakeRecipes from "../../data/fakeRecipes";
import { Recipe } from "../../Interfaces/RecipeInterface";
import {
  BottomContainer,
  DetailContainer,
  RecipeCategory,
  RecipeData,
  RecipeIngredients,
  RecipeName,
  TopInfoContainer,
} from "./styles";

const Detail = (): JSX.Element => {
  const { id } = useParams();
  const recipe = fakeRecipes.find((recipe: Recipe) => recipe._id === id);

  return (
    <>
      {recipe ? (
        <DetailContainer>
          <TopInfoContainer>
            <img
              src={recipe.photo ?? "http://via.placeholder.com/640x360"}
              alt={recipe.name}
            />
            <RecipeData>
              <RecipeCategory>{recipe.categoryName}</RecipeCategory>
              <RecipeName>{recipe.name}</RecipeName>
              <div>
                <p>{recipe.duration} minutes</p>
                <p>{recipe.complexity}</p>
                <p>{recipe.people} people</p>
              </div>
              <RecipeIngredients>
                <h4>Ingredients</h4>
                <div>
                  {recipe.ingredients.split("\r\n").map((ingredient) => (
                    <p key={ingredient}>{ingredient}</p>
                  ))}
                </div>
              </RecipeIngredients>
            </RecipeData>
          </TopInfoContainer>
          <BottomContainer>
            <h4>Info</h4>
            <p>{recipe.description}</p>
          </BottomContainer>
        </DetailContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Detail;
