import { Button } from 'components/common.styled';
import { CardWrap, CardName, CardImg, CardPrice } from './productCard.styled';

export const ProductCard = ({ item }) => {
  return (
    <CardWrap>
      <CardName>{item.name}</CardName>
      <CardImg src={item.image} width="200px" alt="game" />
      <CardPrice>{item.price} грн.</CardPrice>
      <Button>Купить</Button>
    </CardWrap>
  );
};
