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

    @media (max-width: 600px) {
      padding: 10px 15px;
    }
  }
`;

const Home = (): JSX.Element => {
  return (
    <>
      <PageContainer>
        <Recommended recommendedList={fakeRecommendations} />
        <div>
          <RecipesCardsList recipesList={fakeRecipes} />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
