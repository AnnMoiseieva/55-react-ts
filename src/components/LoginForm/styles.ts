import styled from "@emotion/styled";

//Для обёртки элементов формы (поля, чекбоксы, кнопки и т.д.)
//должен использоваться элемент form
export const LoginFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 600px;
  padding: 40px;
  background-color: white;
  border: 2px solid black;
  border-radius: 6px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.div`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
`;
