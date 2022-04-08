import styled from "styled-components";
import RecipesCardsList from "../../components/RecipesCardsList/RecipesCardsList";
import Recommended from "../../components/Recommended/Recommended";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecommendations";

const PageContainer = styled.div`
  background-color: #fafafa;
  padding-top: 50px;

  & > div:nth-child(2n) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    padding: 20px 100px;

    & > h2 {
      font-size: 30px;
      font-weight: bold;
      color: #333;
      margin-bottom: 20px;
    }
  }
`;

const Home = (): JSX.Element => {
  return (
    <>
      <PageContainer>
        <Recommended recommendedList={fakeRecommendations} />
        <div>
          <h2>Top selection</h2>
          <RecipesCardsList recipesList={fakeRecipes} />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
