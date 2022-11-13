import { Heading, Flex } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <>
      <Flex align="center" justify="center" h="70vh">
        <Heading textAlign="center" as="h1" mt={5}>
          Home Page
        </Heading>
      </Flex>
    </>
  );
}
