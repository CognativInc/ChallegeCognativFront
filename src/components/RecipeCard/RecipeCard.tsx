import { Link } from "react-router-dom";
import { Recipe } from "../../Interfaces/RecipeInterface";
import styled from "styled-components";

const RecipeContainer = styled.li`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;

  img {
    height: 100%;
  }
`;

const RecipeInfo = styled.div`
  flex: 1 1;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    align-self: flex-end;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;

    :hover {
      align-self: flex-end;
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 20px;
      background-color: black;
    }

    :active {
      align-self: flex-end;
      background-color: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 20px;
      background-color: black;
      transform: scale(0.9);
    }
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
        <Link className="recipe-button" to="/detail" key={_id}>
          See more
        </Link>
      </RecipeInfo>
    </RecipeContainer>
  );
};

export default RecipeCard;
