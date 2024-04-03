import {
  Button,
  HeroContainer,
  HeroTitle,
  Text,
  TextContainer,
  ImageContainer,
  Container,
} from './HomePage.styled';
import { Header } from '../../components/Header/Header';
import { ReactComponent as IconArrow } from '../../assets/Arrow 16.svg';
const HomePage = () => {
  return (
    <HeroContainer>
      <Header />
      <Container>
        <TextContainer>
          <HeroTitle>Make Life Easier for the Family:</HeroTitle>
          <Text>Find Babysitters Online for All Occasions</Text>
          <Button>
            Get started <IconArrow />
          </Button>
        </TextContainer>
        <ImageContainer />
      </Container>
    </HeroContainer>
  );
};

export default HomePage;
