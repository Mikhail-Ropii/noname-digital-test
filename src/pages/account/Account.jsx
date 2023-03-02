import { AuthorizationBlock, Button } from 'components/common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOut } from 'redux/authOperations';
import { AccountText } from './account.styled';

const Account = () => {
  const { userId, userEmail } = useSelector(state => state.auth);
  const disoatch = useDispatch();

  const handleAuthOut = () => {
    disoatch(authSignOut());
  };

  return (
    <AuthorizationBlock>
      <AccountText>Id: {userId}</AccountText>
      <AccountText>Почта: {userEmail}</AccountText>
      <Button onClick={handleAuthOut}>Выйти</Button>
    </AuthorizationBlock>
  );
};
export default Account;
