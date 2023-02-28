import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelector } from 'react-redux';

const Layout = () => {
  const isLoggedIn = true;
  return (
    <>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <Outlet></Outlet>
    </>
  );
};
export default Layout;
