import { Link } from "react-router-dom";
import styled from "styled-components";
import { recipeDarkGrey } from "../../styles/colors";

const HeaderContainer = styled.div`
  background-color: ${recipeDarkGrey};
  box-shadow: ${recipeDarkGrey} 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  h1 {
    white-space: nowrap;
  }
`;

interface HeaderProps {
  children: React.ReactNode;
}

const Layout = ({ children }: HeaderProps): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </HeaderContainer>
      {children}
    </>
  );
};

export default Layout;
