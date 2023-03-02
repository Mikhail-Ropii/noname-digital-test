// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function PublicRoute({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);
  return isLoggedIn ? <Navigate to="/" /> : children;
}
