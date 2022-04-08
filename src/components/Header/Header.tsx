import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #333;
  box-shadow: #333 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h1>Food recipes</h1>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
