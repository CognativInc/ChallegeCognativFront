import { Link } from "react-router-dom";
import styled from "styled-components";
import { Recipe } from "../../Interfaces/RecipeInterface";
import SectionTitle from "../SectionTitle/SectionTitle";

const ContainerTop = styled.div`
  padding: 20px 100px;

  @media (max-width: 600px) {
    padding: 20px 20px 0 20px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 200px;
    align-items: stretch;

    @media (max-width: 600px) {
      overflow-x: scroll;
      justify-content: flex-start;
      height: 100%;
    }

    li {
      list-style: none;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;

      @media (max-width: 600px) {
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
    }
  }
`;

interface RecommendedProps {
  recommendedList: Recipe[];
}

const Recommended = ({ recommendedList }: RecommendedProps): JSX.Element => {
  return (
    <ContainerTop>
      <SectionTitle text="Recommended" />
      <ul>
        {recommendedList.map((recomendation) => (
          <li key={recomendation._id}>
            <Link to="/detail">
              <img
                src={
                  recomendation.photo ?? "http://via.placeholder.com/640x360"
                }
                alt={recomendation.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </ContainerTop>
  );
};

export default Recommended;
