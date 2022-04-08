import { Link } from "react-router-dom";
import fakeRecommendations from "../../data/fakeRecomendations";

const Recommended = () => {
  return (
    <div>
      <h1 className="title">Recommended</h1>
      <div className="recommendations">
        {fakeRecommendations.map((recomendation) => (
          <Link to="/detail" key={recomendation._id}>
            <img
              className="recommended-image"
              src={recomendation.photo ?? "http://via.placeholder.com/640x360"}
              alt={recomendation.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
