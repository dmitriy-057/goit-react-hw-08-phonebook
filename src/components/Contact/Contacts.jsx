import { Heading, Box } from '@chakra-ui/react';

import ContactList from 'components/ContactList';
import ContactsInput from 'components/ContactsInput';

const Contact = () => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Heading as="h3" mb={4}>
        Conatcts
      </Heading>
      <ContactsInput />
      <ContactList />
    </Box>
  );
};

export default Contact;

// <Box display="flex" alignItems="center">
//   <Button type="submit">Add to Contact</Button>
//   {isLoading && <Loader height={20} width={20} />}
// </Box>;
