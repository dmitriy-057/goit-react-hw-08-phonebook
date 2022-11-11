import { useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import { AuthNav, UserMenu, MainNavigation } from '../allNavComponents';

const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  const isLogin = useAuth().isLogin;

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
            <MainNavigation />
            {isLogin ? <UserMenu /> : <AuthNav />}
          </Flex>
        </Box>
      </Flex>
      <Outlet />
    </>
  );
};

export default Header;
