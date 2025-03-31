import { ChangeEvent, useState } from "react";

import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import "./styles.css";
// All pictures in the project are already exported by default.
// To add an image to a component you need to import it by default and create an alias
import AvatarImg from "../../assets/avatar.jpg";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Lesson08() {
  // Uncontrolled element (component) - an element that is controlled by the browser
  // Controlled element (component) - an element that is controlled using react

  // 1ST Step of control - create a state in which the field values ​​will be stored
  const [message, setMessage] = useState<string>("");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  // 2nd Step of control - create a function that will change the value of state
  // when the value in the field changes
  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setMessage(event.target.value);
  };

  const showMessageHandler = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div className="lesson08-container">
      {/* <Input name="example" /> */}
      <Input
        name="message"
        label="Message: "
        id="message-id"
        placeholder="Enter your message"
        value={message}
        onChange={onChangeMessage}
      />

      <Button name="Show message" onClick={showMessageHandler} />

      {showMessage && <div>{message}</div>}

      {/* {showMessage ? <div>{message}</div> : null} */}

      {/* If the component uses prop children, then the component is called using the opening and closing
      between them are added those JSX elements that we want to substitute instead of children */}

      <EmployeeCard
        name="Mary Smith"
        position="Software Engineer"
        department="IT"
        image={AvatarImg}
      >
        <h3>The best employee</h3>
        <Button name="Show personal page" />
      </EmployeeCard>
    </div>
  );
}

export default Lesson08;
