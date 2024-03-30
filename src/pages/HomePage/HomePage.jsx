import {
  Button,
  HeroContainer,
  HeroTitle,
  Text,
  TextContainer,
  ImageContainer,
} from './HomePage.styled';
import { ReactComponent as IconArrow } from '../../assets/Arrow 16.svg';
const HomePage = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroTitle>Make Life Easier for the Family:</HeroTitle>
        <Text>Find Babysitters Online for All Occasions</Text>
        <Button>
          Get started <IconArrow />
        </Button>
      </TextContainer>
      <ImageContainer></ImageContainer>
    </HeroContainer>
  );
};

export default HomePage;
