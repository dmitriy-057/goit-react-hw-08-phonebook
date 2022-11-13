// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     token: null,
//     isLogin: false,
//     isRefrashing: false,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token } = action.payload;
//       state.user = user;
//       state.token = token;
//       state.isLogin = true;
//     },
//     logOut: (state, _) => {
//       state.user = null;
//       state.token = null;
//       state.isLogin = false;
//     },
//     refreshUser: (state, action) => {
//       console.log(action);
//       const { user, isRefreshing } = action.payload;
//       state.user = user;
//       state.isLogin = true;
//       state.isRefrashing = isRefreshing;
//     },
//   },
// });

// export const { setCredentials, logOut, refreshUser } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// // import { baseApi } from 'redux/baseApi';
// import { register } from './operation';

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(register.pending, (state, acton) => state)
//       .addCase(register.fulfilled, (state, acton) => state)
//       .addCase(register.rejected, (state, acton) => state);
//   },
// });
// export { authSlice };

// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { baseApi } from 'redux/baseApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      baseApi.endpoints.logIn.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(baseApi.endpoints.logOut.matchFulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchPending,
      state => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      baseApi.endpoints.fetchCurrentUser.matchRejected,
      state => {
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export default authSlice.reducer;
