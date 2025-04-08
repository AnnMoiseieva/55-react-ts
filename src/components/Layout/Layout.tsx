import { NavLink } from "react-router-dom";

import {
  LayoutComponent,
  Header,
  Navigation,
  Main,
  Footer,
  LogoText,
} from "./styles";

import { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <LogoText>Company</LogoText>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </Navigation>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <LogoText>Company</LogoText>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
