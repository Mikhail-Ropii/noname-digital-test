// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function PrivatRoute({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);
  return isLoggedIn ? children : <Navigate to="/signin" />;
}
