import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <img
            width="20"
            height="27"
            src="../../../assets/images/user.svg"
            alt="user"
          />
          <NavLink to="/account">Личный кабинет</NavLink>
        </li>
        <li>
          <img
            width="33"
            height="27"
            src="../../../assets/images/cart.svg"
            alt="cart"
          />
          <NavLink to="/cart">Корзина</NavLink>
        </li>
      </ul>
    </div>
  );
};
