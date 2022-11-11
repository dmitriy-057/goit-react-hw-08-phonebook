import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoginIn, isRefreshing } = useAuth().isLogin;
  const shouldRedirect = isRefreshing && isLoginIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
