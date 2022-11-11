import { Button, theme } from '@chakra-ui/react';
import { useUserLogOutMutation } from 'redux/userApi/userApi';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/authSlice/authSlice';
import { useEffect } from 'react';

export default function UserMenu() {
  const dispatch = useDispatch();
  //   useSelector;
  const [logOutUser, { isSuccess }] = useUserLogOutMutation();
  useEffect(() => {
    if (isSuccess) {
      dispatch(logOut({}));
    }
  }, [dispatch, isSuccess]);
  return (
    <>
      <Button
        onClick={logOutUser}
        p={theme.space[1]}
        bg={theme.colors['white']}
      >
        LogOut
      </Button>
      {isSuccess && <Navigate to="/login" />}
    </>
  );
}
