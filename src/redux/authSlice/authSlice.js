import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isLogin: false,
    isRefrashing: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
    logOut: (state, _) => {
      state.user = null;
      state.token = null;
      state.isLogin = false;
    },
    refreshUser: (state, action) => {
      console.log(action);
      const { user, isRefreshing } = action.payload;
      state.user = user;
      state.isLogin = true;
      state.isRefrashing = isRefreshing;
    },
  },
});

export const { setCredentials, logOut, refreshUser } = authSlice.actions;
export default authSlice.reducer;
