import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, Suspense } from 'react';
import { PrivatRoute } from './PrivatRoute';
import { PublicRoute } from './PublicRoute';
import { useEffect } from 'react';
import { authChangeUser } from '../redux/authOperations';

const Layout = lazy(() => import('../pages/layout/Layout'));
const Home = lazy(() => import('../pages/home/Home'));
const SignUp = lazy(() => import('../pages/signUp/SignUp'));
const SignIn = lazy(() => import('../pages/signIn/SignIn'));
const ProductList = lazy(() => import('../pages/productList/ProductList'));
const ProductInfo = lazy(() => import('../pages/productInfo/ProductInfo'));
const Cart = lazy(() => import('../pages/cart/Cart'));
const Account = lazy(() => import('../pages/account/Account'));

export const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authChangeUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductInfo />} />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="account"
            element={
              <PrivatRoute>
                <Account />
              </PrivatRoute>
            }
          />
          <Route
            path="cart"
            element={
              <PrivatRoute>
                <Cart />
              </PrivatRoute>
            }
          />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
