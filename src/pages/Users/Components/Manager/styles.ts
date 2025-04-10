import styled from "@emotion/styled";

export const ManagerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-image: linear-gradient(
    to right,
    rgb(5, 121, 23),
    rgb(132, 231, 139)
  );
`;

export const JobTitle = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #2d2902;
`;

export const Image = styled.img`
  width: 400px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;
