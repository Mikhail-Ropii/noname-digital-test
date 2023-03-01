import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/navigation/Navigation';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { HeaderContainer } from './layout.styled';
import { Footer } from 'components/footer/Footer';
import { Container } from 'components/common.styled';

const Layout = () => {
  const isLoggedIn = true;
  return (
    <>
      <Container>
        <HeaderContainer>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
      </Container>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};
export default Layout;
