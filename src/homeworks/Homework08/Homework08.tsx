import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./styles.css";

function Homework08() {
  const [newPassword, setNewPassword] = useState<string>('');
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const showNewPasswordHandler = () => {
    setShowNewPassword(true);
  };

  const hidePassword = () => {
    setShowNewPassword(false)
  }

  return (
    <div className="password-container">
      <h2>Change password</h2>
      <Input
        name="password"
        label="Password:"
        id="password-id"
        placeholder="Enter password..."
        type="password"
        onChange={onChangePassword}
        value={newPassword}
      />

      <Button name="SHOW PASSWORD" onClick={showNewPasswordHandler} />
      <Button name="HIDE PASSWORD" onClick={hidePassword} />
      {showNewPassword && <div className="result-container">{newPassword}</div>}
    </div>
  );
}

export default Homework08;
