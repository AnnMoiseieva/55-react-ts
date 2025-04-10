import { ClientsWrapper, Title, StyledLink } from "./Styles";

function Clients() {
    return (
        <ClientsWrapper>
            <Title>Clients</Title>
            <StyledLink to="/clients/Codewave">Codewave</StyledLink>
            <StyledLink to="/clients/Innowise">Innowise</StyledLink>
            <StyledLink to="/clients/Itcaps">IT Caps</StyledLink>
        </ClientsWrapper>
    )
}

export default Clients;