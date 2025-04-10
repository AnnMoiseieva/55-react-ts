import { UsersWrapper, Title, StyledLink } from "./styles";

function Users() {
    return (
        <UsersWrapper>
            <Title>Users pages</Title>
            <StyledLink to="/users/Manager">Manager</StyledLink>
            <StyledLink to="/users/Designer">Designer</StyledLink>
        </UsersWrapper>
    )
}

export default Users;