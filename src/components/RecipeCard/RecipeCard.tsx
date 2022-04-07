import { Link } from "react-router-dom";
import { Recipe } from "../../Interfaces/RecipeInterface";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({
  recipe: { name, categoryName, duration, complexity, people, _id, photo },
}: RecipeCardProps): JSX.Element => {
  return (
    <div className="recipe">
      <img
        className="recipe-image"
        src={photo ?? "http://via.placeholder.com/640x360"}
        alt={name}
      />
      <div className="recipe-info">
        <div>
          <p className="recipe-category">{categoryName}</p>
          <h1 className="recipe-name">{name}</h1>
          <div className="recipe-stuff">
            <p className="recipe-time">{duration} minutes</p>
            <p className="recipe-complexity">{complexity}</p>
            <p className="recipe-people">{people} people</p>
          </div>
        </div>
        <Link className="recipe-button" to="/detail" key={_id}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
