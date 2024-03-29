import {
  Button,
  HeroContainer,
  HeroTitle,
  Text,
  TextContainer,
} from './HomePage.styled';
const HomePage = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroTitle>Make Life Easier for the Family:</HeroTitle>
        <Text>Find Babysitters Online for All Occasions</Text>
        <Button>Get started</Button>
      </TextContainer>
    </HeroContainer>
  );
};

export default HomePage;
