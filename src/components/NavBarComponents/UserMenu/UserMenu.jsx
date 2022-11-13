import { Button, theme } from '@chakra-ui/react';

import { useEffect } from 'react';
import { useLogOutMutation } from 'redux/userApi/authApi';
import useAuth from 'hooks/useAuth';
import { useState } from 'react';
export default function UserMenu() {
  const [logOut, setLogOut] = useState(false);
  const isLoginIn = useAuth().isLogin;
  const [logOutUser] = useLogOutMutation();

  useEffect(() => {
    if (!isLoginIn) {
      setLogOut(true);
      console.log(logOut);
    }
  }, [isLoginIn, logOut]);
  console.log('first', isLoginIn);
  return (
    <>
      <Button
        onClick={logOutUser}
        p={theme.space[1]}
        bg={theme.colors['white']}
      >
        LogOut
      </Button>
    </>
  );
}
