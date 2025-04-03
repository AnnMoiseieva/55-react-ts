import styled from "@emotion/styled";

export const Lesson12Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex: 1;
  padding: 60px;
  background-image: linear-gradient(to right, rgb(55, 2, 2), rgb(221, 218, 74));
`;

export const JokeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  color: rgb(55, 2, 2);
  font-weight: bold;
`;

export const Error = styled.div`
  font-size: 28px;
  color: red;
  font-weight: bold;
`;
