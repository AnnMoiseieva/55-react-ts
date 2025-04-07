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
    rgb(173, 172, 159)
  );
  background-position: center;
  background-size: cover;
`;

export const ButtonInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 500px;
  min-height: 400px;
  max-height: 700px;
  overflow-y: auto;
  /* width: 100%; */
  /* background-color: white; */
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
`;

export const ImageWrapper = styled.div`
  margin: 16px;
  background-color: white;
  padding: 30px;
  max-width: 100%;
 `;

export const Error = styled.div`
  font-size: 28px;
  color: red;
  font-weight: bold;
`;

export const ImageElement = styled.img`
  width: 400px;
`;
