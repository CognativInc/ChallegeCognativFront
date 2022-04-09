import { useParams } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import fakeRecipes from "../../data/fakeRecipes";
import { Recipe } from "../../Interfaces/RecipeInterface";
import "./style.css";

export default function Detail() {
  const { id } = useParams();
  const recipe = fakeRecipes.find((recipe: Recipe) => recipe._id === id);

  return (
    <>
      {recipe ? (
        <>
          <SectionTitle text="Food recipes" />
          <div className="page">
            <div className="top">
              <img
                src={recipe.photo ?? "http://via.placeholder.com/640x360"}
                alt={recipe.name}
              />
              <div className="top-information">
                <p className="recipe-detail-category">{recipe.categoryName}</p>
                <h1 className="recipe-detail-name">{recipe.name}</h1>
                <div className="recipe-detail-stuff">
                  <p className="recipe-detail-time">
                    {recipe.duration} minutes
                  </p>
                  <p className="recipe-detail-complexity">
                    {recipe.complexity}
                  </p>
                  <p className="recipe-detail-people">{recipe.people} people</p>
                </div>
                <div className="ingredients">
                  <h4>Ingredients</h4>
                  {recipe.ingredients.split("\r\n").map((ingredient) => (
                    <p key={ingredient}>{ingredient}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="bottom">
              <h4 className="description">Info</h4>
              <p className="description-text">{recipe.description}</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
