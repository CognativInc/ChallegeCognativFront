import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Arrow, DetailLink, SeeMoreButton } from "./styles";

interface NavButtonProps {
  isMobile: boolean;
  id: string;
}

const NavButton = ({ isMobile, id }: NavButtonProps): JSX.Element => {
  return (
    <DetailLink
      to={{
        pathname: `/detail/${id}`,
      }}
    >
      {isMobile ? (
        <Arrow icon={faArrowRight} title="arrow" />
      ) : (
        <SeeMoreButton className="recipe-button">See more</SeeMoreButton>
      )}
    </DetailLink>
  );
};

export default NavButton;
