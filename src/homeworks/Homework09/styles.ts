import styled from "@emotion/styled";

interface UserCardStyledProps {
    primary?: boolean;
}

export const UserCard = styled.div<UserCardStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: ${({ primary }) => (primary ? "350px" : "350px")};
  height: ${({ primary }) => (primary ? "300px" : "300px")};

  flex: 1;
  gap: 30px;
  background-color: ${({primary}) => (primary ? "blue" : "lightblue")};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const TitleCard = styled.h2`
  font-size: 40px;
  color: gold;
`;

export const DescriptionCard = styled.p`
  font-size: 20px;
  color: white;
`;
