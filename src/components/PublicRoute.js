// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PublicRoute({ children }) {
  const isLoggedIn = true;
  return isLoggedIn ? <Navigate to="/products" /> : children;
}
