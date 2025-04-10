import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: linear-gradient(
    to right,
    rgb(1, 1, 19),
    rgb(132, 165, 231)
  );
  color: white;
`;

export const LogoImage = styled.img`
  width: 60px;
  border-radius: 40%;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
`;
export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  color: #656205;
  font-weight: bold;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 30px;
  justify-content: center;
  padding: 20px;
  background-image: linear-gradient(
    to right,
    rgb(1, 1, 19),
    rgb(132, 165, 231)
  );
  color: white;
`;

export const LogoText = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;
export const ButtonContainer = styled.div`
  width: 50px;
`;
