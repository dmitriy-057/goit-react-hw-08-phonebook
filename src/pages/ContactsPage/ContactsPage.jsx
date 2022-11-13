import { Heading, Flex } from '@chakra-ui/react';
import { ContactsSection, FormAddContact } from 'components/allComponents';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactsPage() {
  return (
    <>
      <Heading as="h2" mt={4} textAlign="center">
        PhoneBook
      </Heading>
      <Flex
        justifyContent="center"
        direction={['column', 'row', 'row', 'row']}
        spacing="24px"
        gap={[0, 0, 5, 10]}
        alignItems="baseline"
      >
        <FormAddContact />
        <ContactsSection />
      </Flex>

      <ToastContainer />
    </>
  );
}
