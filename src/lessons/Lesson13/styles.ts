import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex: 1;
  /* padding: 60px; */
  background-image: linear-gradient(
    to right,
    rgb(2, 44, 55),
    rgb(173, 172, 159));
     background-position: center;
     background-size: cover;

`;

export const ButtonInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 400px;
  /* width: 100%; */
  /* background-color: white; */
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const ImageWrapper = styled.div`
  margin: 16px;
  background-color: white;
  max-height: 700px;
  padding: 30px;
  overflow-y: auto;
  max-width: 100%;
  overflow-x: auto;
`;

export const Error = styled.div`
  font-size: 28px;
  color: red;
  font-weight: bold;
`;

export const ImageElement = styled.img`
`
