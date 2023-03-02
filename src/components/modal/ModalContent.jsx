import { AuthorizationBlock, Button } from 'components/common.styled';
import { ModalContentWrap, ModalLink } from './modalContent.styled';

export const ModalContent = ({ closeModal }) => {
  return (
    <AuthorizationBlock>
      <ModalContentWrap>
        <p>
          Чтобы добавить товар в корзину, Вам нужно авторизоваться или
          зарегистрироваться
        </p>
        <ModalLink to={'/signin'}>Авторизация</ModalLink>
        <ModalLink to={'/signup'}>Регистрация</ModalLink>
        <Button onClick={closeModal}>Закрыть</Button>
      </ModalContentWrap>
    </AuthorizationBlock>
  );
};
