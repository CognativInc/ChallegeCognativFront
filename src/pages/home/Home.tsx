import { Link } from "react-router-dom";
import fakeRecipes from "../../data/fakeRecipes";
import fakeRecommendations from "../../data/fakeRecomendations";
import "./style.css";

export default function Home() {
  function renderImage(item) {
    let imageUrl = "http://via.placeholder.com/640x360";
    if (item && item.photo) {
      imageUrl = item.photo;
    }
    return <img className="recipe-image" src={imageUrl} />;
  }
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
            {fakeRecipes.map((item, index) => {
              return (
                <div className="recipe">
                  {renderImage(item)}
                  <div className="recipe-info">
                    <div>
                      <p className="recipe-category">{item.categoryName}</p>
                      <h1 className="recipe-name">{item.name}</h1>
                      <div className="recipe-stuff">
                        <p className="recipe-time">{item.duration} minutes</p>
                        <p className="recipe-complexity">{item.complexity}</p>
                        <p className="recipe-people">{item.people} people</p>
                      </div>
                    </div>
                    <Link className="recipe-button" to="/detail" key={index}>
                      See more
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
