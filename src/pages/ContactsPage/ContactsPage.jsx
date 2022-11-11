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
      >
        <FormAddContact />
        <ContactsSection />
      </Flex>

      <ToastContainer />
    </>
  );
}

// import { Heading, Box, Stack ,Flex} from '@chakra-ui/react';

// import { ContactsInput, ContactList } from 'components/allComponents';

// export default function ContactsSection() {
//   return (
//     <Box as="section" display="flex"  alignItems="center">
//       <Heading as="h3" mb={4}>
//         Conatcts
//       </Heading>
//       <Stack
//         direction={['column', 'row', 'row', 'row']}
//         pt={[4, 4, 0, 0]}
//         spacing="24px"
//       >
//         <ContactsInput />
//         <ContactList />
//       </Stack>
//     </Box>
//   );
// }
