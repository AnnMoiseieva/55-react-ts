import styled from "@emotion/styled";
// import css function to create template styles
import { css } from "@emotion/react"

// create a variable that will contain a style template to be reused
const boxBasicStyles = css`
display: flex;
flex-direction: column;
`

export const Lesson10Container = styled.div`
  ${boxBasicStyles};
  flex: 1;
  gap: 30px;
  padding: 50px;
  background-image: linear-gradient(
    to right,
    rgb(1, 1, 19),
    rgb(132, 165, 231)
  );
`;
export const SectionWrapper = styled.section`
  ${boxBasicStyles}
  gap: 20px;
  padding: 30px;
  background-color: beige;
  border-radius: 4px;
  box-shadow: 10px 10px 10px rgba(5, 3, 45, 0.5);
`;

export const SectionTitle = styled.div`
  font-size: 40px;
  text-align: center;
  color: rgb(158, 143, 29);
  font-weight: bold;
`;
export const Description = styled.p`
  font-size: 20px;
`;

export const NotesSection2 = styled.div`
  ${boxBasicStyles}
  flex-direction: row;
  justify-content: center;
  gap: 30px;
`;

export const NoteBlock = styled.div`
  ${boxBasicStyles}
  justify-content: center;
  gap: 10px;
  width: 30%;
  padding: 20px;
  background-color: rgb(126, 134, 205);
  box-shadow: 10px 10px 10px rgba(5, 3, 45, 0.5);
  border-radius: 6px;

  &:hover {
    background-color: rgb(179, 185, 234);
    box-shadow: 10px 10px 10px rgba(53, 44, 215, 0.5);
  }
`;

export const NoteTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  color: rgb(49, 44, 2);
  font-weight: bold;
`;

export const NoteDescription = styled.p`
  font-size: 18px;
`;

export const MainSection = styled(SectionWrapper)`
  box-shadow: 10px 10px 10px rgba(5, 3, 45, 0.5);
  color: rgb(54, 27, 10);
`;