import {
  HeaderContainer,
  ButtonContainer,
  StyledLinkLogo,
  Navigation,
  StyledLink,
  Button,
  ButtonRegistration,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledLinkLogo to={'/'}>Nanny.Services</StyledLinkLogo>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/nannies">Nannies</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
      <ButtonContainer>
        <Button>Log In</Button>
        <ButtonRegistration>Registration</ButtonRegistration>
      </ButtonContainer>
    </HeaderContainer>
  );
};
