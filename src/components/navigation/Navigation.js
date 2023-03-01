import { MainNavCont } from './navigation.styled';
import { NavLinkStyle } from '../common.styled';

export const Navigation = () => {
  return (
    <MainNavCont>
      <NavLinkStyle to="/">Главная</NavLinkStyle>
      <NavLinkStyle to="products">Товары</NavLinkStyle>
    </MainNavCont>
  );
};
