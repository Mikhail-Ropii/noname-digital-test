import { NavLinkStyle } from '../common.styled';

export const UserMenu = () => {
  return (
    <div>
      <NavLinkStyle to="/account">Личный кабинет</NavLinkStyle>
      <NavLinkStyle to="/cart">Корзина</NavLinkStyle>
    </div>
  );
};
