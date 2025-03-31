

import { DescriptionCard, Homework09Container, TitleCard, UserCard } from "./styles";

function Homework09() {
  return (
    <Homework09Container>
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
    </Homework09Container>
  );
}

export default Homework09;
