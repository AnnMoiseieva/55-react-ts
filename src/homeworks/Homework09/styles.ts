import styled from "@emotion/styled";

interface UserCardStyledProps {
  vip?: boolean;
}

export const Homework09Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 30px;
  padding: 60px;
  background-image: linear-gradient(
    to right,
    rgb(1, 1, 19),
    rgb(132, 165, 231)
  );
`;

export const UserCard = styled.div<UserCardStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: ${({ vip }) => (vip ? "400px" : "350px")};
  height: ${({ vip }) => (vip ? "500px" : "450px")};

  flex: 1;
  gap: 30px;
  background-image: ${({ vip }) =>
    vip
      ? "linear-gradient(to right, rgb(1, 1, 19), rgb(132, 165, 231))"
      : "linear-gradient(to right, rgb(1, 1, 100), rgb(140, 165, 255))"};
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  border-radius: 6px;
`;

export const TitleCard = styled.h2<UserCardStyledProps>`
  text-align: center;
  font-size: 40px;
  color: ${({ vip }) => (vip ? "red" : "orange")};
`;

export const DescriptionCard = styled.p`
  font-size: 20px;
  color: white;
`;
