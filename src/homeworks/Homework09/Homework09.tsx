import "./styles.css";

import { DescriptionCard, TitleCard, UserCard } from "./styles";

function Homework09() {
  return (
    <div className="homework09-container">
      <UserCard primary>
        <TitleCard>VIP User</TitleCard>
        <DescriptionCard>
          Access to exclusive features, personal manager and priority support.
        </DescriptionCard>
      </UserCard>

      <UserCard>
        <TitleCard>Regular User</TitleCard>
        <DescriptionCard>
          Standard access, basic features and first-come, first-served support.
        </DescriptionCard>
      </UserCard>
    </div>
  );
}

export default Homework09;
