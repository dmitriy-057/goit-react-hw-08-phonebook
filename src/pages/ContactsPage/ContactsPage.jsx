import FormAddContact from 'components/FormAddContact';
import { Heading } from '@chakra-ui/react';
import Contact from 'components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactsPage() {
  return (
    <>
      <Heading as="h2" mt={4} textAlign="center">
        PhoneBook
      </Heading>
      <FormAddContact />
      <Contact />
      <ToastContainer />
    </>
  );
}
