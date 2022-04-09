import { useParams } from "react-router-dom";
import styled from "styled-components";
import fakeRecipes from "../../data/fakeRecipes";
import { Recipe } from "../../Interfaces/RecipeInterface";
import "./style.css";

const DetailContainer = styled.section`
  background-color: #fafafa;
  padding-top: 50px;
`;

const TopInfoContainer = styled.div`
  display: flex;
  padding: 20px 100px;

  img {
    height: 400px;
    border-radius: 20px;
  }

  & > div:nth-child(1n) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    & > p:nth-child(1n) {
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

    div:nth-child(3) {
      display: flex;
      margin-top: 10px;
      gap: 30px;

      p {
        font-size: 18px;
        color: #666;
      }
    }

    div:nth-child(4) {
      margin-top: 40px;

      h4 {
        font-size: 20px;
        color: #333;
        font-weight: bold;
      }

      p {
        margin-top: 10px;
        text-align: center;
      }
    }
  }
`;

const BottomContainer = styled.div`
  padding: 20px 100px;

  h4 {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #666;
    line-height: 1.5;
    letter-spacing: 0.2px;
  }
`;

const Detail = (): JSX.Element => {
  const { id } = useParams();
  const recipe = fakeRecipes.find((recipe: Recipe) => recipe._id === id);

  return (
    <>
      {recipe ? (
        <>
          <DetailContainer>
            <TopInfoContainer>
              <img
                src={recipe.photo ?? "http://via.placeholder.com/640x360"}
                alt={recipe.name}
              />
              <div>
                <p>{recipe.categoryName}</p>
                <h2>{recipe.name}</h2>
                <div>
                  <p>{recipe.duration} minutes</p>
                  <p>{recipe.complexity}</p>
                  <p>{recipe.people} people</p>
                </div>
                <div>
                  <h4>Ingredients</h4>
                  {recipe.ingredients.split("\r\n").map((ingredient) => (
                    <p key={ingredient}>{ingredient}</p>
                  ))}
                </div>
              </div>
            </TopInfoContainer>
            <BottomContainer>
              <h4>Info</h4>
              <p>{recipe.description}</p>
            </BottomContainer>
          </DetailContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Detail;
