import { Routes, Route } from 'react-router-dom';
// import { lazy, Suspense } from 'react';

import { Container } from '@chakra-ui/react';
import { RegisterPage, LoginPage, ContactsPage, HomePage } from 'pages';
import { Header } from './allComponents';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Container maxW="container.lg">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Container>
  );
}
