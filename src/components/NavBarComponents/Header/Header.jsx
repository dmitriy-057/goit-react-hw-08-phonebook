import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { MenuItem } from '../../allComponents';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    <>
      <Flex
        p={8}
        as="header"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
      >
        <Box w="200px">
          <Text fontSize="lg" fontWeight="bold">
            Logo
          </Text>
        </Box>

        <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
          {show ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
            as="nav"
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/contacts">Contacts</MenuItem>
            <MenuItem to="/login">Login</MenuItem>
            <MenuItem to="/register" isLast>
              Sigin
            </MenuItem>
          </Flex>
        </Box>
      </Flex>
      <Outlet />
    </>
  );
};

export default Header;
