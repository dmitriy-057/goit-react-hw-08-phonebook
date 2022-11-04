import { Heading, Box } from '@chakra-ui/react';

import { ContactsInput, ContactList } from 'components/allComponents';

export default function ContactsSection() {
  return (
    <Box as="section" display="flex" flexDir="column" alignItems="center">
      <Heading as="h3" mb={4}>
        Conatcts
      </Heading>
      <ContactsInput />
      <ContactList />
    </Box>
  );
}
