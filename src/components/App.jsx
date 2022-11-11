import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { Container } from '@chakra-ui/react';
import { RegisterPage, LoginPage, ContactsPage, HomePage } from 'pages';
import { Header } from './allComponents';
import { useGetCurrentUserQuery } from 'redux/userApi/userApi';
import { refreshUser } from 'redux/authSlice/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const dispatch = useDispatch();

  const { data: dataUser, isLoading: isRefreshing } = useGetCurrentUserQuery();
  useEffect(() => {
    if (dataUser) {
      dispatch(refreshUser({ user: dataUser, isRefreshing }));
    }
  }, [dataUser, dispatch, isRefreshing]);
  return (
    !isRefreshing && (
      <Container maxW="container.lg">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login" component={ContactsPage} />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </Container>
    )
  );
}
