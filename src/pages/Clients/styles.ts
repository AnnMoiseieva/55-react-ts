import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-image: linear-gradient(
    to right,
    rgb(117, 170, 226),
    rgb(210, 218, 235)
  );
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #030227;
`;

export const StyledLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  color: #3b3602;
`;
