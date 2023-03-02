import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from 'redux/cartReducer';
import { Container } from 'components/common.styled';
import {
  CartItemWrap,
  RemoveBtn,
  BtnText,
  ItemText,
  ProductImg,
  CartWrap,
  CartTitle,
  EmtyCartText,
} from './cart.styled';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const handleRemoveItem = id => {
    dispatch(cartSlice.actions.removeFromCart(id));
  };

  return (
    <Container>
      <CartTitle>Козина товаров</CartTitle>
      {cart.length === 0 && <EmtyCartText>Корзина пустая</EmtyCartText>}
      <CartWrap>
        <ul>
          {cart.map(item => (
            <CartItemWrap key={item.id}>
              <ProductImg src={item.image} width="50px" alt="game" />
              <ItemText>{item.name}</ItemText>
              <ItemText>{item.price}</ItemText>
              <ItemText>{item.qty}</ItemText>
              <RemoveBtn onClick={() => handleRemoveItem(item.id)}>
                <BtnText>Удалить</BtnText>
              </RemoveBtn>
            </CartItemWrap>
          ))}
        </ul>
      </CartWrap>
    </Container>
  );
};
export default Cart;
