import { Link } from "react-router-dom";
import RecipesCardsList from "../../components/RecipesCardsList/RecipesCardsList";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecomendations";
import "./style.css";

export default function Home() {
  function renderImageBox(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recommended-image" src={imageUrl} />;
  }

  function renderRecommended() {
    return (
      <div>
        <h1 className="title">Recommended</h1>
        <div className="recommendations">
          {fakeRecommendations.map((item, index) => {
            return (
              <Link to="/detail" key={index}>
                {renderImageBox(item)}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </div>
      <div className="page">
        <div className="container-top">{renderRecommended()}</div>
        <div className="container-bottom">
          {" "}
          <div className="recipes">
            <h1 className="recipes-title">Top selection</h1>
            <RecipesCardsList recipesList={fakeRecipes} />
          </div>
        </div>
      </div>
    </div>
  );
}
