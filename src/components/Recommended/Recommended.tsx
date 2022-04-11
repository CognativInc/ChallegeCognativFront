import { Link } from "react-router-dom";
import { Recipe } from "../../Interfaces/RecipeInterface";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ContainerTop, ListContainer, ListItem } from "./styles";

interface RecommendedProps {
  recommendedList: Recipe[];
}

const Recommended = ({ recommendedList }: RecommendedProps): JSX.Element => {
  return (
    <ContainerTop>
      <SectionTitle text="Recommended" />
      <ListContainer>
        {recommendedList.map((recomendation) => (
          <ListItem key={recomendation._id}>
            <Link
              to={{
                pathname: `/detail/${recomendation._id}`,
              }}
            >
              <img
                src={
                  recomendation.photo ?? "http://via.placeholder.com/640x360"
                }
                alt={recomendation.name}
              />
            </Link>
          </ListItem>
        ))}
      </ListContainer>
    </ContainerTop>
  );
};

export default Recommended;
