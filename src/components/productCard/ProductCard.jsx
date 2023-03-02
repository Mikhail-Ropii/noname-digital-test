import { Button } from 'components/common.styled';
import { CardWrap, CardName, CardImg, CardPrice } from './productCard.styled';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from 'redux/cartReducer';
import { NotificationManager } from 'react-notifications';
import Modal from 'react-modal';
import { ModalContent } from 'components/modal/ModalContent';
import { useState } from 'react';

export const ProductCard = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const handleBuyBtn = item => {
    if (!isLoggedIn) {
      setModalIsOpen(true);
      return;
    }
    if (cart.find(product => product.id === item.id)) {
      dispatch(cartSlice.actions.addQty(item.id));
      NotificationManager.success(`Еще +1 ${item.name}`, 'Корзина');
      return;
    }
    dispatch(cartSlice.actions.addToCart(item));
    NotificationManager.success(`Товар ${item.name} добавлен`, 'Корзина');
  };

  return (
    <CardWrap>
      <Link to={`/products/${item.id}`}>
        <CardName>{item.name}</CardName>
        <CardImg src={item.image} width="200px" alt="game" />
        <CardPrice>{item.price} грн.</CardPrice>
      </Link>
      <Button onClick={() => handleBuyBtn(item)}>Купить</Button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ModalContent closeModal={() => setModalIsOpen(false)} />
      </Modal>
    </CardWrap>
  );
};
