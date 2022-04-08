import { Link } from "react-router-dom";
import styled from "styled-components";
import { Recipe } from "../../Interfaces/RecipeInterface";

const RecommendedTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const RecomendationsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
  align-items: stretch;

  li {
    list-style: none;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

interface RecommendedProps {
  recommendedList: Recipe[];
}

const Recommended = ({ recommendedList }: RecommendedProps): JSX.Element => {
  return (
    <>
      <RecommendedTitle>Recommended</RecommendedTitle>
      <RecomendationsContainer>
        {recommendedList.map((recomendation) => (
          <li>
            <Link to="/detail" key={recomendation._id}>
              <img
                src={
                  recomendation.photo ?? "http://via.placeholder.com/640x360"
                }
                alt={recomendation.name}
              />
            </Link>
          </li>
        ))}
      </RecomendationsContainer>
    </>
  );
};

export default Recommended;
