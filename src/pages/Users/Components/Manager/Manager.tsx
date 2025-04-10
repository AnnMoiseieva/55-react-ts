import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import { ManagerWrapper, Image, JobTitle, ButtonContainer } from "./styles";

function Manager() {
    const navigate = useNavigate();
    const goToCoursePage = () => {
        navigate('/course')
    }
    const goToDesignerPage = () => {
        navigate("/users/designer")
    }
  return (
    <ManagerWrapper>
      <JobTitle>Manager</JobTitle>
      <Image src="https://img.freepik.com/free-vector/xaillustration-businessman-celebrating-success-by-raising-his-hands_10045-817.jpg?semt=ais_hybrid&w=740" />
      <ButtonContainer>
              <Button name="More about course" onClick={goToCoursePage} />
              <Button name="About Designer" onClick={goToDesignerPage} />
      </ButtonContainer>
    </ManagerWrapper>
  );
}

export default Manager;
