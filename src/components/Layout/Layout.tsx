import {
  LayoutComponent,
  Header,
  Navigation,
  Main,
  Footer,
  LogoText,
  StyledNavLink,
  LogoImage,
  ButtonContainer
} from "./styles";

import { LayoutProps, NavLinkObj } from "./types";
import { navLinksData } from "./data";
import { v4 } from "uuid";
import Logo from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1)
  }
  const navLinks = navLinksData.map((navLink: NavLinkObj) => {
    return (
      <StyledNavLink
        key={v4()}
        to={navLink.to}
        style={({ isActive }) => ({
          textDecoration: isActive ? "underline" : "none",
        })}
      >
        {navLink.linkName}
      </StyledNavLink>
    );
  });

  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          {" "}
          <LogoImage src={Logo} />
        </Link>
        <Navigation>{navLinks}</Navigation>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <ButtonContainer>
        <Button name='<-' onClick={goBack}/> </ButtonContainer>
        <LogoText>Company</LogoText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
