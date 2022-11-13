import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin, isRefrashing } = useAuth();
  const shouldRedirect = !isRefrashing && !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
