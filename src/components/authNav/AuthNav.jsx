import { NavLinkStyle } from 'components/common.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyle to="signin">Войти</NavLinkStyle>
      <NavLinkStyle to="signup">Регистрация</NavLinkStyle>
    </div>
  );
};
