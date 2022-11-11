import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoginIn = useAuth().isLogin;
  return isLoginIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
