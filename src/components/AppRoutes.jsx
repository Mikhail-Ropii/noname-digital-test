import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { PrivatRoute } from './PrivatRoute';
import { PublicRoute } from './PublicRoute';

const Layout = lazy(() => import('../pages/Layout'));
const Home = lazy(() => import('../pages/Home'));
const SignUp = lazy(() => import('../pages/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn'));
const ProductList = lazy(() => import('../pages/ProductList'));
const ProductCard = lazy(() => import('../pages/ProductCard'));

export const AppRoutes = () => {
  // const isRefreshingUser = useSelector(authSelectors.getIsRefreshingUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(operations.refreshUser());
  // }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
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
            path="products"
            element={
              <PublicRoute>
                <ProductList />
              </PublicRoute>
            }
          />
        </Route>
        <Route
          path="products:id"
          element={
            <PublicRoute>
              <ProductCard />
            </PublicRoute>
          }
        />
        <Route
          path="account"
          element={
            <PrivatRoute>
              <ProductCard />
            </PrivatRoute>
          }
        />
        <Route
          path="cart"
          element={
            <PrivatRoute>
              <ProductCard />
            </PrivatRoute>
          }
        />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
