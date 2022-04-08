import { Link } from "react-router-dom";
import RecipesCardsList from "../../components/RecipesCardsList/RecipesCardsList";
import Recommended from "../../components/Recommended/Recommended";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecommendations";
import "./style.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <Recommended recommendedList={fakeRecommendations} />

        <div className="container-bottom">
          <div className="recipes">
            <h1 className="recipes-title">Top selection</h1>
            <RecipesCardsList recipesList={fakeRecipes} />
          </div>
        </div>
      </div>
    </>
  );
}
