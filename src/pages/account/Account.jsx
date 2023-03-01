import { AuthorizationBlock, Button } from 'components/common.styled';

const Account = () => {
  return (
    <AuthorizationBlock>
      <p>Имя:</p>
      <p>Почта:</p>
      <Button>Выйти</Button>
    </AuthorizationBlock>
  );
};
export default Account;
