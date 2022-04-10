import { useParams } from "react-router-dom";
import styled from "styled-components";
import fakeRecipes from "../../data/fakeRecipes";
import { Recipe } from "../../Interfaces/RecipeInterface";

const DetailContainer = styled.section`
  background-color: #fafafa;
  padding-top: 50px;
`;

const TopInfoContainer = styled.div`
  display: flex;
  padding: 20px 100px;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;
  }

  img {
    height: 400px;
    border-radius: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      border-radius: 0px;
      height: 200px;
      object-fit: cover;
    }
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

      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    h2 {
      font-size: 25px;
      font-weight: bold;
      color: #333;
      margin-top: 10px;

      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    div:nth-child(3) {
      display: flex;
      margin-top: 10px;
      gap: 30px;

      @media (max-width: 600px) {
        width: 100%;
        justify-content: space-around;
      }

      p {
        font-size: 18px;
        color: #666;

        @media (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    div:nth-child(4) {
      margin-top: 40px;

      @media (max-width: 600px) {
        width: 100%;
        padding: 0 20px;
        margin-top: 15px;
      }

      h4 {
        font-size: 20px;
        color: #333;
        font-weight: bold;

        @media (max-width: 600px) {
          display: flex;
          justify-content: center;
          font-size: 14px;
        }
      }

      div {
        p {
          margin-top: 10px;
          text-align: center;

          @media (max-width: 600px) {
            font-size: 14px;
          }
        }

        @media (max-width: 600px) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          font-weight: bold;
          color: #666;
        }
      }
    }
  }
`;

const BottomContainer = styled.div`
  padding: 20px 100px;

  @media (max-width: 600px) {
    padding: 20px 20px;
  }

  h4 {
    font-size: 30px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;

    @media (max-width: 600px) {
      display: flex;
      font-size: 14px;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    color: #666;
    line-height: 1.5;
    letter-spacing: 0.2px;

    @media (max-width: 600px) {
      font-size: 14px;
    }
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
                  <div>
                    {recipe.ingredients.split("\r\n").map((ingredient) => (
                      <p key={ingredient}>{ingredient}</p>
                    ))}
                  </div>
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
