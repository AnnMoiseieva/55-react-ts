import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px, solid rgba(86, 87, 88, 1);
  border-left-color: rgb(4, 0, 10);
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
