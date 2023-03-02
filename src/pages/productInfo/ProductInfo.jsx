import { useEffect, useState } from 'react';
import data from '../../data';
import { useParams } from 'react-router-dom';
import { Container, Button } from 'components/common.styled';
import {
  CardName,
  CardPrice,
} from '../../components/productCard/productCard.styled';
import {
  CardDescription,
  ProductInfoWrap,
  ProductImg,
} from './productInfo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from 'redux/cartReducer';
import { NotificationManager } from 'react-notifications';
import Modal from 'react-modal';
import { ModalContent } from 'components/modal/ModalContent';

const ProductInfo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();

  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    const selectedProduct = data.find(
      product => product.id.toString() === id.toString()
    );
    if (selectedProduct) {
      setProductDetail(selectedProduct);
    }
  }, [id]);

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
    <Container>
      {productDetail && (
        <ProductInfoWrap>
          <ProductImg src={productDetail.image} width="300px" alt="game" />
          <div>
            <CardName>{productDetail.name}</CardName>
            <CardDescription>{productDetail.description}</CardDescription>
            <CardPrice>{productDetail.price} грн.</CardPrice>
            <Button onClick={() => handleBuyBtn(productDetail)}>Купить</Button>
          </div>
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <ModalContent closeModal={() => setModalIsOpen(false)} />
          </Modal>
        </ProductInfoWrap>
      )}
    </Container>
  );
};
export default ProductInfo;
