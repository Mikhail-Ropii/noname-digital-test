import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { PrivatRoute } from './PrivatRoute';
import { PublicRoute } from './PublicRoute';

const Layout = lazy(() => import('../pages/layout/Layout'));
const Home = lazy(() => import('../pages/home/Home'));
const SignUp = lazy(() => import('../pages/signUp/SignUp'));
const SignIn = lazy(() => import('../pages/signIn/SignIn'));
const ProductList = lazy(() => import('../pages/productList/ProductList'));
const ProductCard = lazy(() => import('../pages/productCard/ProductCard'));

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
          <Route path="products" element={<ProductList />} />
          <Route path="products:id" element={<ProductCard />} />
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
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};
