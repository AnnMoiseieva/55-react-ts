import styled from "@emotion/styled";

export const CodewaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 60px;
  background-image: linear-gradient(
    to right,
    rgb(9, 9, 9),
    rgb(244, 242, 247)
  );
`;

export const CompanyName = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 20%;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;
