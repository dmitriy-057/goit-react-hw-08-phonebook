export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLoggedIn;
export const selectRefreshUser = state => state.auth.isFetchingCurrentUser;
