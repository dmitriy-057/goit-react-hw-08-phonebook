import { MenuItem } from '../../allComponents';
import useAuth from 'hooks/useAuth';

export default function MainNavigation() {
  const isLogin = useAuth().isLogin;
  return (
    <>
      <MenuItem to="/">Home</MenuItem>
      {isLogin && <MenuItem to="/contacts">Contacts</MenuItem>}
    </>
  );
}
