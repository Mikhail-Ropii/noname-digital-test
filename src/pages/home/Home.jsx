import { ProductSlider } from 'components/Slider';
import { Container } from 'components/common.styled';
import { Title, SliderWrap } from './home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Добро пожаловать в магазин игр!</Title>
      <SliderWrap>
        <ProductSlider />
      </SliderWrap>
    </Container>
  );
};
export default Home;
