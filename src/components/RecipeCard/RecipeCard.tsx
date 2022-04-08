import { Recipe } from "../../Interfaces/RecipeInterface";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import NavButton from "../NavButton/NavButton";

const RecipeContainer = styled.li`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 10px;
  }

  img {
    height: 100%;

    @media (max-width: 600px) {
      height: 60%;
      object-fit: cover;
    }
  }
`;

const RecipeInfo = styled.div`
  flex: 1 1;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: row;
    padding: 10px 15px;
  }

  & > div {
    padding: 0;
    p {
      font-size: 20px;
      font-weight: bold;
      color: #666;
    }

    h2 {
      font-size: 25px;
      font-weight: bold;
      color: #333;
      margin-top: 10px;
    }

    div {
      padding: 0;
      display: flex;
      gap: 20px;
      margin-top: 10px;

      p {
        font-size: 18px;
        color: #666;
        font-weight: normal;
      }
    }
  }
`;

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({
  recipe: { name, categoryName, duration, complexity, people, _id, photo },
}: RecipeCardProps): JSX.Element => {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return (
    <RecipeContainer>
      <img src={photo ?? "http://via.placeholder.com/640x360"} alt={name} />
      <RecipeInfo>
        <div>
          <p>{categoryName}</p>
          <h2>{name}</h2>
          <div>
            <p>{duration} minutes</p>
            <p>{complexity}</p>
            <p>{people} people</p>
          </div>
        </div>
        <NavButton isMobile={isMobile} />
      </RecipeInfo>
    </RecipeContainer>
  );
};

export default RecipeCard;
