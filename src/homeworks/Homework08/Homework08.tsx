import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./style.css";

function Homework08() {
  const [newPassword, setNewPassword] = useState<string>();
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };
  const showNewPasswordHandler = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <div className="password-container">
      <h2>Change password</h2>
      <Input
        name="password"
        label="Password:"
        placeholder="Enter password..."
        type="password"
        onChange={onChangePassword}
        value={newPassword}
      />

      <Button name="SHOW PASSWORD" onClick={showNewPasswordHandler} />
      {showNewPassword && <div>{newPassword}</div>}
    </div>
  );
}

export default Homework08;
