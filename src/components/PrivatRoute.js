import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PrivatRoute({ children }) {
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/signin" />;
}
