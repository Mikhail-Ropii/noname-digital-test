import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/signin">Войти</NavLink>
      <NavLink to="/signup">Регистрация</NavLink>
    </div>
  );
};
