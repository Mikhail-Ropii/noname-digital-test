import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Главная</NavLink>
      <NavLink to="products">Товары</NavLink>
    </div>
  );
};
