import { Link } from "react-router-dom";
import styled from "styled-components";
import RecipesCardsList from "../../components/RecipesCardsList/RecipesCardsList";
import Recommended from "../../components/Recommended/Recommended";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecommendations";
import "./style.css";

const HeaderContainer = styled.div`
  background-color: #333;
  box-shadow: #333 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

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

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </HeaderContainer>
      <PageContainer>
        <Recommended recommendedList={fakeRecommendations} />
        <div>
          <h2>Top selection</h2>
          <RecipesCardsList recipesList={fakeRecipes} />
        </div>
      </PageContainer>
    </>
  );
}
