import { Recipe } from "../../Interfaces/RecipeInterface";
import NavButton from "../NavButton/NavButton";
import { useMediaQuery } from "@mui/material";
import {
  RecipeBasicInfo,
  RecipeContainer,
  RecipeInfoContainer,
  RecipeName,
} from "./styles";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({
  recipe: { name, categoryName, duration, complexity, people, _id, photo },
}: RecipeCardProps): JSX.Element => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <RecipeContainer title="recipe">
      <img src={photo ?? "http://via.placeholder.com/640x360"} alt={name} />
      <RecipeInfoContainer>
        <RecipeBasicInfo>
          <p>{categoryName}</p>
          <RecipeName>{name}</RecipeName>
          <div>
            <p>{duration} minutes</p>
            <p>{complexity}</p>
            <p>{people} people</p>
          </div>
        </RecipeBasicInfo>
        <NavButton isMobile={isMobile} id={_id} />
      </RecipeInfoContainer>
    </RecipeContainer>
  );
};

export default RecipeCard;
