import { Link } from "react-router-dom";
import { Recipe } from "../../Interfaces/RecipeInterface";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  return (
    <div className="recipe">
      <img
        className="recipe-image"
        src={recipe.photo ?? "http://via.placeholder.com/640x360"}
        alt={recipe.name}
      />
      <div className="recipe-info">
        <div>
          <p className="recipe-category">{recipe.categoryName}</p>
          <h1 className="recipe-name">{recipe.name}</h1>
          <div className="recipe-stuff">
            <p className="recipe-time">{recipe.duration} minutes</p>
            <p className="recipe-complexity">{recipe.complexity}</p>
            <p className="recipe-people">{recipe.people} people</p>
          </div>
        </div>
        <Link className="recipe-button" to="/detail" key={recipe._id}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
