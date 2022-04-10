import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { recipeDarkGrey } from "../../styles/colors";

const DetailLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Arrow = styled(FontAwesomeIcon)`
  color: #000;
  font-size: 30px;
  margin-bottom: 5px;
`;

const SeeMoreButton = styled.button`
  align-self: flex-end;
  background-color: ${recipeDarkGrey};
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  :hover {
    background-color: #000;
  }

  :active {
    transform: scale(0.9);
  }
`;

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
