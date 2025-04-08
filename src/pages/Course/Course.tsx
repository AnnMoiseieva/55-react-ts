import { CourseWrapper, ListOfTopics, Title, Topic } from "./Styles";

function Course() {
  return (
    <CourseWrapper>
          <Title>React Lessons</Title>
          <ListOfTopics>
              <Topic>TypeScript</Topic>
              <Topic>Props and State</Topic>
              <Topic>Object Types. Export and Import</Topic>
              <Topic>Controlled and Uncontrolled Components</Topic>
              <Topic>Children. Control Components</Topic>
              <Topic>Styling Components</Topic>
              <Topic>Global Styles, Styles Templates</Topic>
              <Topic>Server Requests. Axios</Topic>
              <Topic>UseEffect</Topic>
              <Topic>Formik.Yup</Topic>
              <Topic>Routing</Topic>                         
          </ListOfTopics>
    </CourseWrapper>
  );
}

export default Course;
