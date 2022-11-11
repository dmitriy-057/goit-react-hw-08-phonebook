import { useSelector } from 'react-redux';

import {
  selectCurrentUser,
  selectCurrentToken,
  selectIsLogin,
  selectRefreshUser,
} from 'redux/authSlice/selectors';

export default function useAuth() {
  return {
    isLogin: useSelector(selectIsLogin),
    takeToken: useSelector(selectCurrentToken),
    user: useSelector(selectCurrentUser),
    isRefrashing: useSelector(selectRefreshUser),
  };
}
