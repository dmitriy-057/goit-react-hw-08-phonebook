import { Heading, Flex } from '@chakra-ui/react';

import { ContactsInput, ContactList } from 'components/allComponents';

export default function ContactsSection() {
  return (
    <Flex
      as="section"
      align="center"
      direction="column"
      my={3}
      minH="226px"
      w="50vh"
    >
      <Heading as="h3" mb={4}>
        Conatcts
      </Heading>
      <ContactsInput />
      <ContactList />
    </Flex>
  );
}
