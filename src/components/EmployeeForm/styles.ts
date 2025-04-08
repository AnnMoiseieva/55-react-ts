import styled from "@emotion/styled";

export const EmployeeFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Checkbox = styled.input`
  width: 25px;
  hight: 25px;
`;

export const CheckboxLabel = styled.label`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  height: 20px;
  font-size: 18px;
  color: red;
`;
