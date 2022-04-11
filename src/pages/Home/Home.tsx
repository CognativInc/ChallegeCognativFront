import RecipesCardsList from "../../components/RecipesCardsList/RecipesCardsList";
import Recommended from "../../components/Recommended/Recommended";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecommendations";
import { PageContainer } from "./styles";

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
