import { baseApi } from 'redux/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query({ name, email, password }) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body: {
            name,
            email,
            password,
          },
        };
      },
    }),
    logIn: builder.mutation({
      query({ email, password }) {
        return {
          url: `/users/login`,
          method: 'POST',
          body: {
            email,
            password,
          },
        };
      },
    }),
    logOut: builder.mutation({
      query() {
        return {
          url: `/users/logout`,
          method: 'POST',
        };
      },
    }),
    fetchCurrentUser: builder.mutation({
      query() {
        return {
          url: `/users/current`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLogInMutation,
  useLogOutMutation,
  useFetchCurrentUserMutation,
} = authApi;
