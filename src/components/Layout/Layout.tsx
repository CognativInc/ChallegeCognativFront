import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

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
